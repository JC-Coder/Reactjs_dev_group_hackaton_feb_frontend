import { useEffect, useState } from "react";
import { musicData } from "../constants/musicData";
import { useSelector, useDispatch } from "react-redux";
import { clearHistory } from "../features/history/history-slice";
import MusicCard from "./MusicCard";
import Navbar from "./Navbar";
import { TrashIcon } from "@heroicons/react/24/outline";
import CustomRequest from "./CustomRequest";
import { nanoid } from "@reduxjs/toolkit";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const gradients = [
  "from-red-500/50",
  "from-slate-500/50",
  "from-indigo-500/50",
  "from-green-500/",
  "from-yellow-500/50",
  "from-purple-500/50",
  "from-pink-500/50",
  "from-blue-500/50",
  "from-teal-500/50",
];

// check this again
function generateUserId() {
    const userId = nanoid()
    return userId
}


export default function SongRequests() {
    const history = useSelector((state) => state.history.historyData);
  const dispatch = useDispatch();
  const [gradient, setGradient] = useState("");


  const notify = () =>
    toast.warning("history cleared", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "colored",
    });

  function getRandomGradient() {
    let randomNumber = Math.floor(Math.random() * gradients.length);
    setGradient(gradients[randomNumber]);
  }

  function handleClearHistory() {
    dispatch(clearHistory());
    if (history.length > 0) {
      notify();
    }
  }

  useEffect(() => {
    getRandomGradient();
    generateUserId()
  }, []);

  return (
    <div className="flex-grow bg-[#1e1e1e] text-white h-screen overflow-y-scroll scrollbar-hide">
      <Navbar />
      {/* Hero component */}
      <section
        className={`bg-gradient-to-b relative to-black ${gradient} h-80 `}
      >
        <div className="h-80">
          <img
            className="h-full w-full object-cover opacity-10"
            src="https://images.pexels.com/photos/332688/pexels-photo-332688.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <h1 className="absolute animate-pulse bottom-0 font-medium text-4xl ml-auto p-2">
          Now Playing <span className="text-orange-500">Music Title</span>
        </h1>
      </section>

      <section className="px-2">
        <CustomRequest />
      </section>

      <div className="px-2 relative">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-2xl my-2">History</h2>
          <button
            onClick={() => handleClearHistory()}
            className="text-xs hover:text-red-500 text-[#1e1e1e] bg-slate-100 inline-flex gap-1 items-center p-1 rounded "
          >
            <p>Clear History</p>
            <TrashIcon className="h-5" />
          </button>
        </div>
        <div className="flex space-x-2 p-2 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
          {history.length > 0 ? (
            history.map((item) => <MusicCard key={item.id} {...item} />)
          ) : (
            <p className="text-gray-500">No current history</p>
          )}
        </div>
        <h2 className="font-medium text-2xl my-2">Popular Requests</h2>
        <div className="flex space-x-2 p-2 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
          {musicData.map((item) => (
            <MusicCard key={item.id} {...item} />
          ))}
        </div>
        {/* <div className="absolute bg-gradient-to-l from-white/30 top-12 rounded-lg right-2 h-[178px] w-2/12" /> */}
        <h2 className="font-medium text-2xl my-2"> Recommended songs</h2>
        <div className="flex space-x-2 p-2 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
          {musicData.map((item) => (
            <MusicCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
