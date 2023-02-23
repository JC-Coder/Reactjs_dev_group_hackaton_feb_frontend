import { LockClosedIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { notificationArr } from "../constants/notificationArr";
import SingleNotification from "./SingleNotification";

export default function Notifications({
  showNotification,
  setShowNotification,
}) {

    function clearNotifications() {

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
          {notificationArr.map((item) => (
              <SingleNotification key={item._id} {...item} />
          ))}
        </div>
        {/* <div className="h-20 w-full absolute top-60  left-0 bg-gradient-to-t from-black" /> */}
      </div>
    </aside>
  );
}
