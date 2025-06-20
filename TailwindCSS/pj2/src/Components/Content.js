import React from 'react'
import List from './List'

const Content = ({ data }) => {
  return (
    <main className='w-full flex flex-col flex-grow justify-start items-center overflow-y-auto p-4'>
        <h1 className='text-2xl font-bold text-gray-800 mt-2 mb-2'>Data</h1>
        {data.length ? (
            <List data={data} />
        ) : (
            <p className='text-gray-600'>No data available</p>
        )}
    </main>
  )
}

export default Content