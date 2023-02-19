import React, {useState, useEffect} from 'react'

const gradients = [
  "from-red-500/50",
  "from-slate-500/50",
  "from-indigo-500/50",
  "from-green-500/",
  "from-yellow-500/50",
  "from-purple-500/50",
  "from-pink-500/50",
  "from-blue-500/50",
  "from-teal-500/50",
];



export default function HeroSection() {
    const [gradient, setGradient] = useState("");

    useEffect(() => {
        getRandomGradient()
    }, [])



    function getRandomGradient() {
     let randomNumber = Math.floor(Math.random() * gradients.length);
     setGradient(gradients[randomNumber]);
    }
    
    function getRandomGradient() {
    let randomNumber = Math.floor(Math.random() * gradients.length);
    setGradient(gradients[randomNumber]);
  }



  return (
    <section
        className={`bg-gradient-to-b relative to-black ${gradient} h-80 `}
      >
        <div className="h-80">
          <img
            className="h-full w-full object-cover opacity-10"
            src="https://images.pexels.com/photos/332688/pexels-photo-332688.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <h1 className="absolute animate-pulse bottom-0 font-medium text-4xl ml-auto p-2">
          Now Playing <span className="text-orange-500">Music Title</span>
        </h1>
      </section>
  )
}
