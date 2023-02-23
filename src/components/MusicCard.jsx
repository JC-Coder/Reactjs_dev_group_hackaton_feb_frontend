import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { apiConfig } from "../config/api";
import { helperFunction } from "../helper/helper";

export default function MusicCard(item) {
  const baseUrl = apiConfig.baseUrl;
  const userId = helperFunction.getUserId();

  function handleRequest() {
    axios
      .post(`${baseUrl}/users/request`, {
        ...item,
        userId: userId,
      })
      .then((response) => {
        if (response.status == 201) {
          helperFunction.notifySuccess("Request Successful");
        }
      })
      .catch((err) => {
        helperFunction.notifyFail(err.response.data.message);
      });
  }

  return (
    <div className="cursor-pointer group bg-[#181818] p-4 rounded-lg hover:bg-[#282828] shadow-md transition-all duration-150">
      <ToastContainer />
      <div className="relative h-36 w-36 snap-center">
        <img
          className="h-full w-full object-cover rounded-lg "
          src={`${item.albumArt}`}
          alt="album art"
        />
      </div>
      <div className="pt-2">
        <h2 className="text-white font-medium">{item.name}</h2>
        <span className="text-sm text-gray-400">{item.artist}</span>
        <button
          className="font-medium block mt-2 text-xs active:scale-90 transition bg-white text-[#1e1e1e] hover:text-white hover:bg-blue-400 px-2 py-1 rounded"
          onClick={() => handleRequest(item.id)}
        >
          Request music
        </button>
      </div>
    </div>
  );
}
