import { useEffect } from "react";
import { musicData } from "../constants/musicData";
import { useDispatch } from "react-redux";
import { clearHistory } from "../features/history/history-slice";
import Navbar from "./Navbar";
import { nanoid } from "@reduxjs/toolkit";
import HeroSection from "./HeroSection";
import HistoryCard from "./HistoryCard";
import MusicCardDj from "./MusicCardDj";

// check this again
function generateUserId() {
  const userId = nanoid();
  return userId;
}

export default function SongRequestsDj() {
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

      <div className="px-2 relative">
        <section className="new-requests">
         <div className="flex justify-between items-center">
         <h2 className="font-medium text-2xl my-2">Music Requests</h2>

         <select name="Sort By" id="sort" className="bg-[#111111] p-2 outline-none rounded-lg">
          <option value="oldest">oldest</option>
          <option value="latest">newest</option>
         </select>
         </div>
          <div className="flex space-x-2 p-2 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
            {musicData.map((item) => (
              <MusicCardDj key={item.id} {...item} />
            ))}
          </div>
        </section>

        {/* <div className="absolute bg-gradient-to-l from-white/30 top-12 rounded-lg right-2 h-[178px] w-2/12" /> */}

        <section className="played-songs">
          <h2 className="font-medium text-2xl my-2"> Played Songs</h2>
          <div className="flex space-x-2 p-2 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
            {musicData.map((item) => (
              <HistoryCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        <section className="played-songs">
          <h2 className="font-medium text-2xl my-2"> Unavailable Songs</h2>
          <div className="flex space-x-2 p-2 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
            {musicData.map((item) => (
              <HistoryCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
