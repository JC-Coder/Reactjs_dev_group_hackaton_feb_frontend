import Spinner from "./Spinner";
import { useSelector, useDispatch } from "react-redux";
import { clearHistory } from "../features/history/history-slice";
import MusicCard from "./MusicCard";
import Navbar from "./Navbar";
import "react-toastify/dist/ReactToastify.css";
import HeroSection from "./HeroSection";
import HistoryCard from "./HistoryCard";
import MusicCardDj from "./MusicCardDj";
import { fetchAllRequests } from "../features/requests/request-slice";
import { useEffect } from "react";

export default function SongRequestsDj() {
  const musicRequests = useSelector((state) => state.requests.musicRequests);
  const loading = useSelector((state) => state.requests.loading);
  const playedSongs = useSelector((state) => state.requests.played);
  const unavailable = useSelector((state) => state.requests.unavailable);

  const dispatch = useDispatch();
  console.log(playedSongs);
  useEffect(() => {
    dispatch(fetchAllRequests());
  }, []);
  console.log(musicRequests);

  return (
    <div className="flex-grow bg-[#1e1e1e]  text-white h-screen overflow-y-scroll scrollbar-hide">
      <Navbar />
      {/* Hero component */}
      <HeroSection />

      <div className="px-2 relative  mx-auto max-w-[1220px]  p-3">
        <section className="new-requests">
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-2xl my-2">Music Requests</h2>
          </div>
          <div className="flex justify-center space-x-2 p-2 mt-2 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
            {loading && <Spinner />}

            {!loading &&
              musicRequests.map((request) => (
                <MusicCardDj key={request._id} {...request} />
              ))}
          </div>
        </section>
        <section className="played-songs">
          <h2 className="font-medium text-2xl my-2">Played Songs</h2>
          <div className="flex space-x-2 p-2 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
            {loading && <Spinner />}
            {playedSongs.map((playedSong) => (
              <HistoryCard key={playedSong._id} status="Played" />
            ))}
          </div>
        </section>

        <section className="played-songs">
          <h2 className="font-medium text-2xl my-2"> Unavailable Songs</h2>
          <div className="flex space-x-2 p-2 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
            {unavailable.map((song) => (
              <HistoryCard key={song._id} status="Unavailable" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
