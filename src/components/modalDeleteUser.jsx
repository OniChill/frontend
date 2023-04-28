import { deleteUserById } from "../api/myapi";


export default function ModalDeleteUser({ onClose, onNew, idUser, token }) {


  const handleSubmit = async () => {
    console.log("delete");
    const deleting = await deleteUserById(token, idUser);
    if (deleting.success === true) {
        console.log("berhasil",deleting.message);
        onClose();
        onNew(deleting.message);
      } else {
        console.log("gagal",deleting.message);
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
            Delete User 
          </h2>
          <h2 class="mt-2 font-semibold text-gray-800">Apakah anda yakin ingin menghapus user ini?</h2>
        </div>
            <div className="flex">
                <div className="w-1/2">
              <button
                onClick={handleSubmit}
                className="my-5  w-full flex justify-center bg-red-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Delete
              </button>
              </div>
              <div className="w-1/2">
              <button
                onClick={handleCloseModal}
                className="my-5 w-full flex justify-center bg-gray-500 text-gray-100 p-4 mx-2 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Batal
              </button>
              </div>
            </div>
      </div>
    </>
  );
}
