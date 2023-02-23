import React from 'react'

export default function Overlay({ isOpen, onClick }) {
  return (
    <div className={`fixed top-0 left-0 h-screen w-screen bg-gray-800 opacity-50 backdrop-blur-lg z-10 ${
        isOpen ? 'block' : 'hidden'
    }`}
    onClick={onClick}
    >

    </div>
  )
}
