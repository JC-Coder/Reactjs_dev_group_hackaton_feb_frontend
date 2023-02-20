import { useEffect, useState } from "react";
import { musicData } from "../constants/musicData";
import { useSelector, useDispatch } from "react-redux";
import { clearHistory } from "../features/history/history-slice";
import MusicCard from "./MusicCard";
import Navbar from "./Navbar";
import { TrashIcon } from "@heroicons/react/24/outline";
import CustomRequest from "./CustomRequest";
import { nanoid } from "@reduxjs/toolkit";
import "react-toastify/dist/ReactToastify.css";
import HeroSection from "./HeroSection";
import HistoryCard from "./HistoryCard";

// check this again
function generateUserId() {
  const userId = nanoid();
  return userId;
}

export default function SongRequests() {
  const history = [
    {
      id: 1,
      title: 'Birthday Song',
      artist: 'Davido',
      albumArt: 'https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&w=400',
      year: 2016,
      requested: false,
      status: 'not played',
  },
  {
      id: 2,
      title: 'Fine Lady',
      artist: 'wizkidayo',
      albumArt: 'https://images.unsplash.com/photo-1506010100053-cc98c49b6aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2l6a2lkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
      year: 2020,
      requested: false,
      status: 'not played',
  },
  {
      id: 3,
      title: 'Worries',
      artist: 'Tems',
      albumArt: 'https://images.pexels.com/photos/6862365/pexels-photo-6862365.jpeg?auto=compress&cs=tinysrgb&w=400',
      year: 2021,
      requested: false,
      status: 'not played',
  },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    generateUserId();
  }, []);

  const notify = () =>
    toast.warning("history cleared", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "colored",
    });

  function handleClearHistory() {
    dispatch(clearHistory());
    if (history.length > 0) {
      notify();
    }
  }

  return (
    <div className="flex-grow bg-[#1e1e1e] text-white h-screen overflow-y-scroll scrollbar-hide">
      <Navbar />
      {/* Hero component */}
      <HeroSection />

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
            history.map((item) => <HistoryCard key={item.id} {...item} />)
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
