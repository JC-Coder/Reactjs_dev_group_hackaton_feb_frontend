import { React, useEffect, useState } from "react";
import { addHistory } from "../features/history/history-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { helperFunction } from "../helper/helper";
import axios from "axios";
import { apiConfig } from "../config/api";

export default function MusicCardDj(item) {
  const baseUrl = apiConfig.baseUrl
  function markAsNowPlaying(item) {
    axios
    .post(`${baseUrl}/dj/now-playing`, {name: item.name, artist: item.artist})
  }

  function handleRequest(id) {
    const requestAlreadyExists = currentHistory.find((item) => item.id === id);
    if (!requestAlreadyExists) {
      dispatch(addHistory(item));
      helperFunction.notifySuccess("Request Successful");
    }
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
        {/* <span className="text-gray-500 text-xs ml-2 ">{item.year}</span> */}
        <button
          className="font-medium block mt-2 text-xs active:scale-90 transition bg-white text-[#1e1e1e] hover:text-white hover:bg-blue-400 px-2 py-1 rounded"
          onClick={() => markAsNowPlaying(item)}
        >
          Mark as now playing
        </button>
        <button
          className="font-medium block mt-2 text-xs active:scale-90 transition bg-white text-[#1e1e1e] hover:text-white hover:bg-blue-400 px-2 py-1 rounded"
          onClick={() => handleRequest(item.id)}
        >
          Mark as played
        </button>
        <button
          className="font-medium block mt-2 text-xs active:scale-90 transition bg-white text-[#1e1e1e] hover:text-white hover:bg-blue-400 px-2 py-1 rounded"
          onClick={() => handleRequest(item.id)}
        >
          Mark as unavailable
        </button>
      </div>
    </div>
  );
}
