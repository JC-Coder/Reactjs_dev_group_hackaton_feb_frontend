import { capitalize } from "./MusicCardDj";
export default function HistoryCard(item) {
  return (
    <div className="cursor-pointer group bg-[#181818] p-4 rounded-lg hover:bg-[#282828] shadow-md transition-all duration-150">
      <div className="relative h-36 w-36 snap-center">
        <img
          className="h-full w-full object-cover rounded-lg "
          src={item.albumArt}
          alt="album art"
        />
      </div>
      <div className="pt-2">
        <h2 className="text-white font-medium">{capitalize(item.name)}</h2>
        <span className="text-sm text-gray-400">{capitalize(item.artist)}</span>
        <div className="font-medium block mt-2 text-xs active:scale-90 transition bg-[#212121] text-gray-300 px-2 py-1 rounded">
          Status: {item.status}
        </div>
      </div>
    </div>
  );
}
