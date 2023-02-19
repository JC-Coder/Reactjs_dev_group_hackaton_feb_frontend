import React from "react";
import MusicList from "../components/DJ/MusicList/MusicList";

function All() {
  return (
    <div className="text-white max-width-[1220px] mx-auto px-4 pt-14 pb-4">
      <h1 className="text-2xl font-bold">All Requests</h1>
      <MusicList />
    </div>
  );
}

export default All;
