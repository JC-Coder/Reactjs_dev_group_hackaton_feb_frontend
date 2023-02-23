import { LockClosedIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { apiConfig } from "../config/api";
import { notificationArr } from "../constants/notificationArr";
import { helperFunction } from "../helper/helper";
import SingleNotification from "./SingleNotification";
import axios from "axios";
import { channel } from "../config/pusher";

export default function Notifications({
  showNotification,
  setShowNotification,
}) {
  const [notifications, setNotifications] = useState([]);
  const userId = helperFunction.getUserId()
  const baseUrl = apiConfig.baseUrl;

  // get user music request history
  useEffect(() => {
    if (window.location.href.split("/")[3] == "dj") {
      axios
        .get(`${baseUrl}/dj/notifications`)
        .then((response) => setNotifications(response.data));

        
      // update dj notification with pusher
      channel.bind("dj-new-notification", (data) => {
        console.log({djNotification: data.data})
        setNotifications([data.data, ...notifications]);
        channel.unbind("dj-new-notification");
      });
    } else {
      axios
        .get(`${baseUrl}/users/notifications/${userId}`)
        .then((response) => setNotifications(response.data));

      // update user notification with pusher
      channel.bind("user-new-notification", (data) => {
        console.log({userNotification: data.data})
        setNotifications([data.data, ...notifications]);
        channel.unbind("user-new-notification");
      });
    }
  }, []);

  function clearNotifications() {}

  return (
    <aside
      className={`bg-black fixed p-4 top-0 right-0 h-screen z-50 w-[55vw] sm:w-[45vw] md:w-[35vw] transition ${
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
        {/* <div className="h-20 w-full absolute top-60  left-0 bg-gradient-to-t from-black" /> */}
      </div>
    </aside>
  );
}
