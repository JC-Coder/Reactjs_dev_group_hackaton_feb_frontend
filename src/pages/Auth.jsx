import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiConfig } from "../config/api";
import { helperFunction } from "../helper/helper";
import "react-toastify/dist/ReactToastify.css";
import { ReactNotifications } from "react-notifications-component";

export default function Auth() {
  const [key, setKey] = useState("");
  const baseurl = apiConfig.baseUrl;

  useEffect(() => {
    const djAuthenticated = localStorage.getItem("isDjAuthenticated");
    if(djAuthenticated == 'yes'){
      window.location = '/dj';
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (!key) {
      helperFunction.notifyInfo("Key is required");
      return;
    }

    // validate dj
    axios
      .post(`${baseurl}/dj/auth`, { key })
      .then((res) => {
        if (res.status == 200) {
          helperFunction.notifySuccess("Key valid, redirecting");
          localStorage.setItem('isDjAuthenticated', 'yes')
          window.location = '/dj';
        }
      })
      .catch((err) => {
        helperFunction.notifyFail("Invalid Key");
      });
    setKey("");
  }

  return (
    <div className="bg-[#1e1e1e] h-screen flex justify-center items-center">
      <ReactNotifications />
      <div className="bg-gray-100 w-80 p-4 rounded">
        <div className="mb-4">
          <h1 className="text-center text-3xl">
            Welcome <span className="font-medium text-orange-500">DJ</span>
          </h1>
          <p className="text-center italic text-gray-500">
            Enter the DJ secret key to start your party!!!
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <fieldset className="space-y-4">
            <div className="flex items-center gap-2">
              <label className="whitespace-nowrap text-gray-600">
                Secret Key
              </label>
              <input
                className="w-full p-2 rounded outline-none focus:ring-2 text-gray-500"
                type="text"
                placeholder="input secret key"
                name="name"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 drop-shadow-md hover:drop-shadow-none  transition active:bg-orange-600 active:scale-95 w-full text-white font-medium px-4 py-2 rounded"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
