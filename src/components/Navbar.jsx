import { BellIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import Notifications from "./Notifications";
import Pusher from "pusher-js";

export default function Navbar() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    // Set up Pusher client and channel
    const pusher = new Pusher("564d257a0600fa9948fc", {
      cluster: "eu",
    });
    const channel = pusher.subscribe("gd-channel");

    // Bind to event handler
    const handleNotification = () => {
      setNotificationCount((prev) => prev + 1);
    };
    if (window.location.href.split("/")[3] == "dj") {
      // update dj notification count
      channel.bind("dj-notification-count", handleNotification);
    } else {
      // update user notification count
      channel.bind("user-notification-count", handleNotification);
    }

    // Unsubscribe from channel and unbind event handler when the component unmounts
    return () => {
      channel.unbind("user-notification-count", handleNotification);
      channel.unbind("dj-notification-count", handleNotification);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-0 backdrop-blur px-6 py-2  z-50 flex items-center justify-end">
        {/* <h1 className="text-white font-bold text-2xl">Navbar</h1> */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotification((prev) => !prev);
              setNotificationCount((prev) => 0);
            }}
          >
            <BellIcon className="h-7 hover:text-blue-400" />
          </button>
          {notificationCount < 1 ? (
            ""
          ) : (
            <span className="absolute -top-1 -right-1 flex h-4 p-1 aspect-square items-center justify-center bg-red-500 rounded-full font-medium text-sm">
              {notificationCount}
            </span>
          )}
        </div>
      </nav>
      <Notifications
        showNotification={showNotification}
        setShowNotification={setShowNotification}
      />
    </>
  );
}
