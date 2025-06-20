import React from 'react'

const Footer = ({length}) => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center w-full">
        Number of Players: {length}
    </footer>
  )
}

export default Footer