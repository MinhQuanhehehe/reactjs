import React from 'react'

const Footer = ({data}) => {
  return (
    <footer className="shadow-xl rounded-t-xl bg-gray-800 text-white p-4 text-center w-full">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
      <p className="text-sm">
        Number of User: {data.length || 0}
      </p>
    </footer>
  )
}

export default Footer