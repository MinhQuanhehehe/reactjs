import React from 'react'
import { useState } from 'react'
import Ul from './Ul'

const Content = ({ players, handleCheck, handleDelete }) => {
    return (
        <main className='w-full flex flex-col flex-grow justify-start items-center overflow-y-auto'>
            <h1 className='text-2xl font-bold text-gray-800 mt-2 mb-2'>Player List</h1>
            {players.length ? (
            <Ul
                players={players}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />) : (
            <p> EMPTY LIST PLAYERS</p>
        )}
        </main>
    )
}

export default Content