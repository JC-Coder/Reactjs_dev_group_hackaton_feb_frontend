import React, {useState} from "react";


export default function CustomRequest() {
    const [songTitle, setSongTitle] = useState('')
    const [artistName, setArtistName] = useState('')
    
  function handleSubmit(e) {
    e.preventDefault();
    const songTitle = e.target[0].value
    const artistName = e.target[1].value
    setArtistName('')
    setSongTitle('')
    return { songTitle, artistName}
  }

  return (
    <div className="bg-[#181818] p-4 my-2 rounded-lg max-w-xl">
      <h1 className="text-2xl mb-2 font-medium">Custom request</h1>

      <form className="" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col gap-2 md:flex-row justify-between text-gray-600">
          <input 
          type="text" 
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          className="rounded p-2 outline-none" 
          placeholder="song title" 
          />

          <input
            type="text"
            value={songTitle}
          onChange={(e) => setSongTitle(e.target.value)}
            className="rounded p-2 outline-none"
            placeholder="artist name"
          />
        </div>

        <div className="mt-3">
          <button
            className="bg-red-500 hover:bg-red-600 font-medium px-4 py-2 w-full rounded"
            type="submit"
          >
           request 
          </button>
        </div>
      </form>
     
    </div>
  );
}
