import { BsFillDiscFill, BsFillPlayFill } from "react-icons/bs";
import { BiFlag } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";

function ListItem({ title, name, id }) {
  return (
    <section className="px-3 py-3 glass-effect rounded-lg min-w-[12rem] gap-2 flex flex-col justify-between">
      {/* <p className="bg-purple-600  p-[.1rem] rounded-sm font-bold text-black uppercase absolute top-1 right-4">
        played
      </p>
     <p className="bg-red-600 text-white  p-[.1rem] rounded-sm font-bold text-black uppercase absolute top-1 right-4">
        unavailable
      </p>  */}
      <div className="flex justify-between">
        <BsFillDiscFill className="text-green-600 w-full h-full max-w-[5rem] animate-spin " />
        <AiFillPlayCircle className="text-3xl text-green-600 mt-5 cursor-pointer hover-icons-animation" />
      </div>

      <div>
        <p className="text-lg font-bold">{title}</p>
        <span className="flex gap-4 items-center text-gray-400">
          <p className="text-lg ">{name}</p>
          <p className="text-md">2016</p>
        </span>
      </div>
      <div className="flex marker:gap-1">
        <p>Status: unavailable</p>
      </div>
    </section>
  );
}

export default ListItem;
