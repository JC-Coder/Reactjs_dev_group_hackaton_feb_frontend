import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHistory } from "../features/history/history-slice";
import { helperFunction } from "../helper/helper";


export default function MusicCardDj(item) {
    const currentHistory = useSelector((state) => state.history.historyData);
  const dispatch = useDispatch();


  function handleRequest(id) {
    const requestAlreadyExists = currentHistory.find((item) => item.id === id)
    if (!requestAlreadyExists) {
        dispatch(addHistory(item));
        helperFunction.notifySuccess('Request successful');
    }
  }

  
  return (
    <div className="cursor-pointer group bg-[#181818] p-4 rounded-lg hover:bg-[#282828] shadow-md transition-all duration-150">
      <div className="relative h-36 w-36 snap-center">
        <img
          className="h-full w-full object-cover rounded-lg "
          src={`${item.albumArt}`}
          alt="album art"
        />
      </div>
      <div className="pt-2">
        <h2 className="text-white font-medium">{item.title}</h2>
        <span className="text-sm text-gray-400">{item.artist}</span>
        {/* <span className="text-gray-500 text-xs ml-2 ">{item.year}</span> */}
        <button
          className="font-medium block mt-2 text-xs active:scale-90 transition bg-white text-[#1e1e1e] hover:text-white hover:bg-blue-400 px-2 py-1 rounded"
          onClick={() => handleRequest(item.id)}
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
