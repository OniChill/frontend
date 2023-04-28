import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signup } from "../api/myapi";
import { Link } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { validationAddUser } from "../schema/ValidationUser";
import AlertSuccess from "../components/alertSucces";



export default function SignUp() {
  const {  setAuth } = useAuth();
  const [message, setMessage] = useState(""); 

  const initialValues = {
    name:"",
    email: "",
    password: "",
    confirm_password: "",
  };

  const handleSignUpSubmit = async (values) => {
    const registration = await signup(values.name, values.email,values.password, values.confirm_password);
    if (registration.success === true) {
      setAuth(registration.data);
      setMessage(registration.message);
    } else {
      setMessage(registration.message);
      console.log(registration.message);
    }   
  };

  return (
    <>
<AlertSuccess message={message}/>
      <div className="flex flex-col items-center justify-center px-6 py-16 mb-20 mx-auto md:h-screen lg:py-0 ">
        
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white my-20">
          Website
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Buat Akun
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationAddUser}
              onSubmit={handleSignUpSubmit}
            >
              <Form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                  <Field type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="I Putu" required="" />
                  <div className="text-red-600">
                    <ErrorMessage  name="name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  <div className="text-red-600">
                    <ErrorMessage  name="email" />
                  </div>
                </div>
                <div >
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <Field type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  <div className="text-red-600">
                    <ErrorMessage name="password" />
                  </div>
                </div>
                <div className="pb-6">
                  <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Konfirmasi Password</label>
                  <Field type="password" name="confirm_password" id="confirm_password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  <div className="text-red-600">
                    <ErrorMessage name="confirm_password" />
                  </div>
                </div>

                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buat Akun</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Sudah memiliki akun? 
                <Link to={'/login'} className=" m-2 font-medium text-blue-600 hover:underline dark:text-blue-500">Masuk</Link>
                </p>
              </Form>
             </Formik>
          </div>
        </div>
      </div>
      </>
  );
}

