import { React, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { apiConfig } from "../config/api";
import { helperFunction } from "../helper/helper";

export default function MusicCardDj(item) {
  const baseUrl = apiConfig.baseUrl;

  function markAsNowPlaying(item) {
    axios
      .post(`${baseUrl}/dj/now-playing`, {
        name: item.name,
        artist: item.artist,
      })
      .then((res) => {
        if (res.status == 200) {
          helperFunction.notifySuccess("Now Playing Set Success");
        }
      })
      .catch((err) => {
        if (err) {
          helperFunction.notifyFail("Error Occured try again");
        }
      });
  }

  function handleUpdate(id, status) {
    axios
      .put(`${baseUrl}/dj/requests`, { id, status })
      .then((res) =>
        helperFunction.notifySuccess("Song Request Update Success")
      )
      .catch((err) =>
        err
          ? helperFunction.notifyFail("Song request update failed, try again")
          : ""
      );
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
          onClick={() => markAsNowPlaying(item)}
        >
          Mark as now playing
        </button>
        <button
          className="font-medium block mt-2 text-xs active:scale-90 transition bg-white text-[#1e1e1e] hover:text-white hover:bg-blue-400 px-2 py-1 rounded"
          onClick={() => handleUpdate(item._id, "played")}
        >
          Mark as played
        </button>
        <button
          className="font-medium block mt-2 text-xs active:scale-90 transition bg-white text-[#1e1e1e] hover:text-white hover:bg-blue-400 px-2 py-1 rounded"
          onClick={() => handleUpdate(item._id, "unavailable")}
        >
          Mark as unavailable
        </button>
      </div>
    </div>
  );
}
