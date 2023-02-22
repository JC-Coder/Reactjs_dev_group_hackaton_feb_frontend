import { ReactNotifications } from "react-notifications-component";

export default function HeroSection() {
   return (
    <section
        className={`bg-gradient-to-b relative to-black ${''} h-80 md:h-96 `}
      >
        <ReactNotifications />
        <div className="h-80 md:h-96 custom-img bg-center bg-fixed bg-cover rounded">
        </div>
        <h1 className="absolute animate-pulse bottom-0 font-medium text-4xl ml-auto p-2">
          Now Playing <br></br><span className="text-orange-500 text-3xl">FEM</span> <span className='text-2xl'>by</span>  <span className="text-orange-500 text-3xl">Davido</span>
        </h1>
      </section>
  )
}
