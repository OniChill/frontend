import React, { useState, useEffect } from "react";
export default function AlertSuccess({message}) {
 
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (message) {
            setShowMessage(true);
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const handleAlert = () => {
        setShowMessage(false);
      };

    return (
        <>
            {showMessage && (
                <div className="flex justify-center items-center">
                <div className="mt-10 p-2  bg-emerald-700 items-center text-emerald-100 leading-none lg:rounded-full flex lg:inline-flex">
                <div className="flex items-center">
                  <span className="flex rounded-full bg-emerald-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                    berhasil
                  </span>
                  <span className="font-semibold mr-2 text-left">
                    {message == "Request failed with status code 500"? "email sudah terdaftar":message}
                  </span>
                </div>
                <button onClick={handleAlert}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white" viewBox="0 0 16 16" width="20" height="20"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                </button>
              </div>
              </div>
            )}
        </>
    );
}
