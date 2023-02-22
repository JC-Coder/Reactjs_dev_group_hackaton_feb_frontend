import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToPlayed } from "../features/requests/request-slice";

export default function MusicCardDj(item) {
  const dispatch = useDispatch();

  const addToPlayedHandler = () => {
    dispatch(
      addToPlayed({
        item,
        receiver: "played",
        sender: "musicRequests",
      })
    );
  };
  const addToUnavailable = () => {
    dispatch(
      addToPlayed({
        item,
        receiver: "unavailable",
        sender: "musicRequests",
      })
    );
  };

  return (
    <div className="dj-music-card">
      <ToastContainer />
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
        <button className="dj-btn-styles">Mark as now playing</button>
        <button className="dj-btn-styles" onClick={addToPlayedHandler}>
          Mark as played
        </button>
        <button className="dj-btn-styles" onClick={addToUnavailable}>
          Mark as unavailable
        </button>
      </div>
    </div>
  );
}
