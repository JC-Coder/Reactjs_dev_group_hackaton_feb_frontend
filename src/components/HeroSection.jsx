import React, { useState, useEffect } from "react";
import { channel } from "../config/pusher";
import axios from "axios";
import { apiConfig } from "../config/api";


export default function HeroSection() {
  const [nowPlaying, setNowPlaying] = useState(null);
  const baseUrl = apiConfig.baseUrl;

  // get now playing 
  useEffect(() => {
    axios.get(`${baseUrl}/dj/now-playing`).then(res => {
      if(!Object.keys(res.data).length < 1) {
        setNowPlaying(res.data);
      }
    })
  }, [])

    // update now playing
    channel.bind("now-playing", (data) => {
      setNowPlaying(data.data);
      channel.unbind("now-playing");
    });

  return (
    <section
      className={`bg-gradient-to-b relative to-black ${""} h-80 md:h-96 `}
    >
      <div className="h-80 md:h-96 custom-img bg-center bg-fixed bg-cover rounded">
        
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
