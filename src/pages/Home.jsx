import React, { useEffect, useState } from "react";
import { getUsers } from "../api/myapi";
import useAuth from "../hook/useAuth";
import Modal from "../components/modalAddUser";
import ModalEditUser from "../components/modalEditUser";
import AlertSuccess from "../components/alertSucces";
import ModalDeleteUser from "../components/modalDeleteUser";
import Navbar from "../components/Navbar";

export default function Home() {
  const { auth } = useAuth();
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [idUser, setIdUser] = useState("");
  const [message, setMessage] = useState("");
  const token = auth?.token;
  
  useEffect(() => {
    const fetchUsers = async () => {
      const dataUsers = await getUsers(token);
      setUsers(dataUsers.users);
    }
    fetchUsers()
  }, [refresh])
  
  const handleNewData = (message) => {
    setMessage(message);
    setRefresh(!refresh);
   }; 

  const handleModal = () => {
   setModal(!modal);
  };
  const handleModalEdit = (id) => {
    setIdUser(id);
    setModalEdit(!modalEdit);
  };
  const handleModalDelete = (id) => {
    setIdUser(id);
    setModalDelete(!modalDelete);
  };
  
  return (
<>
<Navbar/>
<section className="py-1 h-[720px] bg-gray-200 dark:bg-gray-900">

<AlertSuccess message={message}/>

<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
  
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blue-700">Tabel Users</h3>
        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
        
          <button
                onClick={handleModal}
                className="my-5   bg-blue-500 text-gray-100 px-3 py-1 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
              > Tambah User</button>
        </div>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-6 bg-blue-50 text-blue-500 align-middle border border-solid border-blue-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          No
                        </th>
          <th className="px-6 bg-blue-50 text-blue-500 align-middle border border-solid border-blue-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Name
                        </th>
           <th className="px-6 bg-blue-50 text-blue-500 align-middle border border-solid border-blue-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Email
                        </th>
          <th className="px-6 bg-blue-50 text-blue-500 align-middle border border-solid border-blue-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Aksi
                        </th>
          </tr>
        </thead>

        <tbody>
        {users?.map((item, index) => (
          <tr key={index}>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blue-700">{index + 1}</td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.name}</td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.email}</td>
            <td>
              <button className="px-4" onClick={() => handleModalEdit(item.id)}>
                <img 
                  src="icon/edit.svg" 
                  alt="icon delete" 
                  width={16}
                  height={16} 
                />
                </button>
              <button className="px-4" onClick={() => handleModalDelete(item.id)}>
                <img 
                  src="icon/delete.svg" 
                  alt="icon delete" 
                  width={16}
                  height={16} 
                />
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
{modal && (<Modal onClose={handleModal} onNew={handleNewData}/>)}
{modalEdit && (<ModalEditUser onClose={handleModalEdit} onNew={handleNewData} token={token} idUser={idUser}/>)}
{modalDelete && (<ModalDeleteUser onClose={handleModalDelete} onNew={handleNewData} token={token} idUser={idUser}/>)}
</section>

</>
  );
}


