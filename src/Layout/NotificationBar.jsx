import React, { useContext } from "react";
import NotificationCtx from "../context/NotificationCtx";
import { RiCloseFill } from "react-icons/ri";

function NotificationBar() {
  const notifcationCtx = useContext(NotificationCtx);

  const { toggleNotification } = notifcationCtx;

  return (
    <div className="min-h-screen p-4 right-0 w-72 glass-effect fixed z-40">
      <RiCloseFill
        className="text-3xl text-white absolute right-4"
        onClick={toggleNotification}
      />
    </div>
  );
}

export default NotificationBar;
