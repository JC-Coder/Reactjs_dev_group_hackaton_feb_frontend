import { XCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { apiConfig } from "../config/api";
import { helperFunction } from "../helper/helper";
import SingleNotification from "./SingleNotification";
import axios from "axios";
import { channel } from "../config/pusher";

export default function Notifications({
  showNotification,
  setShowNotification,
}) {
  const [notifications, setNotifications] = useState([]);
  const userId = helperFunction.getUserId();
  const baseUrl = apiConfig.baseUrl;

  // get user music request history
  useEffect(() => {
    if (window.location.href.split("/")[3] == "dj") {
      axios
        .get(`${baseUrl}/dj/notifications`)
        .then((response) => setNotifications(response.data));
    } else {
      axios
        .get(`${baseUrl}/users/notifications/${userId}`)
        .then((response) => setNotifications(response.data));
    }
  }, []);

  if (window.location.href.split("/")[3] == "dj") {
    // update dj notification with pusher
    channel.bind("dj-new-notification", (data) => {
      setNotifications([data.data, ...notifications]);
      channel.unbind("dj-new-notification");
    });
  } else {
    // update user notification with pusher
    channel.bind("user-new-notification", (data) => {
      setNotifications([data.data, ...notifications]);
      channel.unbind("user-new-notification");
    });
  }

  return (
    <aside
      className={`bg-black fixed p-4 top-0 right-0 h-screen z-50 w-[85vw] sm:w-[65vw] md:w-[45vw] transition ${
        showNotification ? "translate-x-0" : "translate-x-full"
      } `}
    >
      <div>
        <XCircleIcon
          onClick={() => setShowNotification(!showNotification)}
          className="my-1 h-9 w-9 text-gray-500 hover:text-red-500 cursor-pointer"
        />
      </div>
      <hr className="border-gray-500" />
      <div className="space-y-2 relative p-2">
        <div className="overflow-y-scroll h-[500px] scrollbar-hide space-y-2">
          {notifications.map((item) => (
            <SingleNotification key={item._id} {...item} />
          ))}
        </div>
        <div className="h-40 w-full absolute bottom-0 left-0 bg-gradient-to-t from-black" />
      </div>
    </aside>
  );
}
