import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "react-toastify/dist/ReactToastify.css";
import HeroSection from "./HeroSection";
import HistoryCard from "./HistoryCard";
import MusicCardDj from "./MusicCardDj";
import axios from "axios";
import { apiConfig } from "../config/api";
import { helperFunction } from "../helper/helper";
import { channel } from "../config/pusher";

export default function SongRequestsDj() {
  const [requests, setRequests] = useState([]);
  const baseUrl = apiConfig.baseUrl;
  const userId = helperFunction.getUserId();

  // get all requests
  useEffect(() => {
    axios.get(`${baseUrl}/dj/requests`).then((response) => {
      setRequests(() => response.data);
    });
  }, []);

  // update requests with pusher
  channel.bind("user-new-request", (data) => {
    setRequests([...requests, data.data]);
    channel.unbind("user-new-request");
  });

  // update all request on user history clear
  channel.bind("all-requests", (data) => {
    setRequests(data.data);
    channel.unbind("all-requests");
  });

  return (
    <div className="flex-grow bg-[#1e1e1e] text-white h-screen overflow-y-scroll scrollbar-hide">
      <Navbar />
      {/* Hero component */}
      <HeroSection />

      <div className="px-2 relative">
        <section className="new-requests">
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-2xl my-2">Music Requests</h2>

            <select
              name="Sort By"
              id="sort"
              className="bg-[#111111] p-2 outline-none rounded-lg"
            >
              <option value="oldest">oldest</option>
              <option value="latest">newest</option>
            </select>
          </div>
          <div className="flex space-x-2 p-2 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
            {requests.filter((item) => item.status == "not played").length >
            0 ? (
              requests
                .filter((item) => item.status == "not played")
                .map((item) => <MusicCardDj key={item.id} {...item} />)
            ) : (
              <p className="text-gray-500">No music request at the moment</p>
            )}
          </div>
        </section>

        {/* <div className="absolute bg-gradient-to-l from-white/30 top-12 rounded-lg right-2 h-[178px] w-2/12" /> */}

        <section className="played-songs">
          <h2 className="font-medium text-2xl my-2"> Played Songs</h2>
          <div className="flex space-x-2 p-2 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
            {requests.filter((item) => item.status == "played").length > 0 ? (
              requests
                .filter((item) => item.status == "played")
                .map((item) => <HistoryCard key={item.id} {...item} />)
            ) : (
              <p className="text-gray-500">No played songs</p>
            )}
          </div>
        </section>

        <section className="played-songs">
          <h2 className="font-medium text-2xl my-2"> Unavailable Songs</h2>
          <div className="flex space-x-2 p-2 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
            {requests.filter((item) => item.status == "unavailable").length >
            0 ? (
              requests
                .filter((item) => item.status == "unavailable")
                .map((item) => <HistoryCard key={item.id} {...item} />)
            ) : (
              <p className="text-gray-500">No unavailable songs</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
