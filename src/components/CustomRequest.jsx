import React, { useState } from "react";
import { apiConfig } from "../config/api";
import { helperFunction } from "../helper/helper";
import axios from "axios";

export default function CustomRequest() {
  const [songTitle, setSongTitle] = useState("");
  const [artistName, setArtistName] = useState("");

  const baseUrl = apiConfig.baseUrl;
  const userId = helperFunction.getUserId();

  function handleSubmit(e) {
    e.preventDefault();
    const songTitle = e.target[0].value;
    const artistName = e.target[1].value;
    setArtistName("");
    setSongTitle("");

    if(!songTitle || !artistName){
      helperFunction.notifyFail('Song name and artist name is required');
    }

    axios
    .post(`${baseUrl}/users/request`, {
      name: songTitle,
      artist: artistName,
      userId: userId,
      albumArt: 'https://res.cloudinary.com/dsg6otcag/image/upload/v1677182474/disk-image_kujx6e.png'
    })
    .then((response) => {
      if (response.status == 201) {
        helperFunction.notifySuccess("Request Successful");
      }
    })
    .catch((err) => {
      console.log(err)
      helperFunction.notifyFail(err.message);
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
            className="bg-orange-500 hover:bg-orange-600 font-medium px-4 py-2 w-full rounded"
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
