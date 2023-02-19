import { LockClosedIcon, XCircleIcon } from "@heroicons/react/24/outline"



export default function Notifications({showNotification, setShowNotification}) {
    return (
        <div className={`bg-black fixed top-0 right-0 h-screen z-50 w-[45vw] sm:w-[35vw] md:w-[25vw] transition ${showNotification ? 'translate-x-0' : 'translate-x-full'} `}>
            <div>
                <XCircleIcon
                onClick={() => setShowNotification(!showNotification)}
                className="my-2 h-9 w-9 ml-2  hover:text-red-500 cursor-pointer" 
                />
            </div>
            <hr />
            <h1 className="text-gray-500">Notifications</h1>
        </div>
    )
}