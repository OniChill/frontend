import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import  { login } from "../api/myapi";
import useAuth from "../hook/useAuth";
import { validationLogin } from "../schema/ValidationUser";
import AlertSuccess from "../components/alertSucces";

export default function Login() {
  const { setAuth } = useAuth();
  const [message, setMessage] = useState(""); 

  const initialValues = {
    email: "",
    password: "",
  };
  

  const handleLoginSubmit = async (values) => {
    const tryLogin = await login(values.email,values.password);
    if (tryLogin.success === true) {
      setAuth(tryLogin.data)
      setMessage(tryLogin.message)
    } else {
      setMessage(tryLogin.message)
    }
    
  };


  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      
      <div className="flex flex-col items-center justify-center px-6 py-16 mx-auto md:h-screen lg:py-0">
      <AlertSuccess message={message}/>
        <a href="#" className="flex items-center mt-2 mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Website
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              login
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationLogin}
              onSubmit={handleLoginSubmit}
            >
              <Form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  <div className="text-red-600">
                    <ErrorMessage  name="email" />
                  </div>
                </div>
                <div className="pb-6">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <Field type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  <div className="text-red-600">
                    <ErrorMessage name="password" />
                  </div>
                </div>

                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Masuk</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Belum memiliki akun? 
                <Link to={'/signup'} className=" m-2 font-medium text-blue-600 hover:underline dark:text-blue-500">Buat Akun</Link>
                </p>
              </Form>
             </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

