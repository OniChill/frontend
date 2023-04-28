import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationAddUser } from "../schema/ValidationUser";
import { signup } from "../api/myapi";

export default function ModalAddUser({ onClose, onNew }) {

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  
  const handleSubmit = async (values) => {
    const registration = await signup(values.name, values.email,values.password, values.confirm_password);
    if (registration.success === true) {
      console.log("berhasil",registration.message);
      onClose();
      onNew(registration.message);
    } else {
      console.log("gagal",registration.message);
      onClose();
    }   
  };

  const handleCloseModal = () => {
    onClose();
  };
  return (
    <>
      <div className="fixed bg-black opacity-60 inset-0 z-50"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:max-w-lg w-full p-10 bg-white rounded-xl z-50">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-gray-900">
            Tambah Data
          </h2>

        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationAddUser}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">name</label>
              <Field className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="text" placeholder="I Putu" name="name" />
              <div className="text-red-600">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">email</label>
              <Field className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="email" placeholder="mail@gmail.com" name="email" />
              <div className="text-red-600">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">password</label>
              <Field className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="password" placeholder="******" name="password" />
              <div className="text-red-600">
                <ErrorMessage name="password" />
              </div>
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">confirm password</label>
              <Field className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="password" placeholder="******" name="confirm_password" />
              <div className="text-red-600">
                <ErrorMessage name="confirm_password" />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Tambah
              </button>
              <button
                onClick={handleCloseModal}
                className="my-5 w-full flex justify-center bg-gray-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Batal
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}
