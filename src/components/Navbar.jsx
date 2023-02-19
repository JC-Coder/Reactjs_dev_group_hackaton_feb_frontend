import { BellAlertIcon, BellIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Notifications from "./Notifications";


export default function Navbar() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <>
      <nav className="sticky top-0 backdrop-blur-lg px-6 py-2  z-50 flex items-center justify-end">
        {/* <h1 className="text-white font-bold text-2xl">Navbar</h1> */}
        <div className="relative">
          <button onClick={() => setShowNotification(prev => !prev)}>
            <BellIcon 
            className="h-7 hover:text-blue-400" 
            />
          </button>
          <span className="absolute -top-1 -right-1 flex h-4 p-1 aspect-square items-center justify-center bg-red-500 rounded-full font-medium text-sm">
            2
          </span>
        </div>
      </nav>
        <Notifications showNotification={showNotification} setShowNotification={setShowNotification} />
    </>
  );
}
