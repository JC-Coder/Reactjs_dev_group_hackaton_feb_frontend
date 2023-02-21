import React from 'react'
import { PlayIcon, PlayCircleIcon } from "@heroicons/react/24/solid";

export default function SingleNotification({_id, title, message, createdAt, uptadedAt }) {

  return (
    <div className="flex gap-2 items-center rounded border p-2 border-gray-700">
        <div>
          <PlayCircleIcon className="h-6 w-6 text-blue-300" />
        </div>
        <div>
          <p className="text-sm whitespace-nowrap">{title}</p>
          <p className="text-xs text-gray-400">{message}</p>
      <div className="text-xs my-2 place-items-end text-gray-400 ">{createdAt}</div>
        </div>
    </div>
  );
}
