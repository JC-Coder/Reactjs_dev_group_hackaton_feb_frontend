import React, { useContext } from "react";
import { BsFillBellFill } from "react-icons/bs";
import NotificationCtx from "../../context/NotificationCtx";

function NavigationDj() {
  const notificationCtx = useContext(NotificationCtx);
  const { toggleNotification } = notificationCtx;

  return (
    <nav className="w-full glass-effect fixed py-5 px-2 z-20 top-0">
      <div className="max-w-[1220px] mx-auto flex justify-between items-center text-2xl ">
        <div className="">
          <h1 className="uppercase font-bold text-center">GrooveDeck</h1>
        </div>
        <div>
          <BsFillBellFill
            className="cursor-pointer"
            onClick={toggleNotification}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavigationDj;
