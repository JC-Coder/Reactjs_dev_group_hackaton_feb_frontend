import React, { useState, useEffect } from "react";
import { channel } from "../config/pusher";

// const gradients = [
//   "from-red-500/50",
//   "from-slate-500/50",
//   "from-indigo-500/50",
//   "from-green-500/",
//   "from-yellow-500/50",
//   "from-purple-500/50",
//   "from-pink-500/50",
//   "from-blue-500/50",
//   "from-teal-500/50",
// ];

export default function HeroSection() {
  // const [gradient, setGradient] = useState("");

  //   function getRandomGradient() {
  //    let randomNumber = Math.floor(Math.random() * gradients.length);
  //    setGradient(gradients[randomNumber]);
  //   }

  //   function getRandomGradient() {
  //   let randomNumber = Math.floor(Math.random() * gradients.length);
  //   setGradient(gradients[randomNumber]);
  // }

  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    // update now playing
    channel.bind("now-playing", (data) => {
      console.log(data.data);
      setNowPlaying(data.data);
      channel.unbind("now-playing");
    });
  }, []);

  return (
    <section
      className={`bg-gradient-to-b relative to-black ${""} h-80 md:h-96 `}
    >
      <div className="h-80 md:h-96 custom-img bg-center bg-fixed bg-cover rounded">
        {/* <img
            className="h-full w-full object-cover "
            src="https://images.pexels.com/photos/332688/pexels-photo-332688.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          /> */}
      </div>
      {nowPlaying ? (
        <h1 className="absolute animate-pulse bottom-0 font-medium text-4xl ml-auto p-2">
          Now Playing <br></br>
          <span className="text-orange-500 text-3xl">
            {nowPlaying.name}
          </span>{" "}
          <span className="text-2xl">by</span>{" "}
          <span className="text-orange-500 text-3xl">{nowPlaying.artist}</span>
        </h1>
      ) : (
        <></>
      )}
    </section>
  );
}
