import React, { useState } from "react";
import { apiConfig } from "../config/api";
import { helperFunction } from "../helper/helper";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function CustomRequest() {
  const [songTitle, setSongTitle] = useState("");
  const [artistName, setArtistName] = useState("");

  const baseUrl = apiConfig.baseUrl;
  const userId = helperFunction.getUserId();

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "colored",
    });

  const notifyFail = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "colored",
    });

  function handleSubmit(e) {
    e.preventDefault();
    const songTitle = e.target[0].value;
    const artistName = e.target[1].value;
    setArtistName("");
    setSongTitle("");

    if(!songTitle || !artistName){
      notifyFail('Song name and artist name is required');
    }

    axios
    .post(`${baseUrl}/users/request`, {
      name: songTitle,
      artist: artistName,
      userId: userId,
    })
    .then((response) => {
      if (response.status == 201) {
        notifySuccess("Request Successful");
      }
    })
    .catch((err) => {
      notifyFail(err.response.data.message);
    });
  }

  return (
    <div className="bg-[#181818] p-4 my-2 rounded-lg max-w-xl">
      <h1 className="text-2xl mb-2 font-medium">Custom request</h1>

      <form className="" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col gap-2 md:flex-row justify-between text-gray-600">
          <input
            type="text"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            className="rounded p-2 outline-none"
            placeholder="song name"
          />

          <input
            type="text"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
            className="rounded p-2 outline-none"
            placeholder="artist name"
          />
        </div>

        <div className="mt-3">
          <button
            className="bg-red-500 hover:bg-red-600 font-medium px-4 py-2 w-full rounded"
            type="submit"
            onSubmit={handleSubmit}
          >
            request
          </button>
        </div>
      </form>
    </div>
  );
}
