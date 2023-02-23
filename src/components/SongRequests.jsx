import { useEffect, useState } from "react";
import { musicData } from "../constants/musicData";
import MusicCard from "./MusicCard";
import Navbar from "./Navbar";
import { TrashIcon } from "@heroicons/react/24/outline";
import CustomRequest from "./CustomRequest";
import "react-toastify/dist/ReactToastify.css";
import HeroSection from "./HeroSection";
import HistoryCard from "./HistoryCard";
import axios from "axios";
import { apiConfig } from "../config/api";
import { helperFunction } from "../helper/helper";
import { channel, pusherInstance } from "../config/pusher";

export default function SongRequests() {
  const [history, setHistory] = useState([]);
  const baseUrl = apiConfig.baseUrl;
  const userId = helperFunction.getUserId();

  // get user music request history
  useEffect(() => {
    axios
      .get(`${baseUrl}/users/requests/${userId}`)
      .then((response) => setHistory(() => response.data));
  }, []);

  // update history with pusher
  channel.bind("user-new-request", (data) => {
    setHistory([data.data, ...history]);
    channel.unbind("user-new-request");
  });

  // update request status
  channel.bind("user-request-update", (data) => {
    const newHistory = [...history];
    const itemIndex = newHistory.findIndex(item => item._id == data.data._id);
    newHistory[itemIndex] = {...newHistory[itemIndex], status: data?.data.status}
    setHistory([...newHistory]);
    channel.unbind("user-request-update");
  });

  function handleClearHistory() {
    if (history.length < 1) {
      helperFunction.notifyFail("No history to clear");
      return;
    }

    axios
      .post(`${baseUrl}/users/requests/clear/${userId}`)
      .then((response) => {
        helperFunction.notifySuccess("History Cleared");
        setHistory([]);
      })
      .catch((err) => {
        helperFunction.notifyFail("Error Occured try again");
      });
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
