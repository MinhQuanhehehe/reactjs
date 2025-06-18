import React from 'react'
import { useState } from 'react'
import Ul from './Ul'

const Content = ({ players, handleCheck, handleDelete }) => {
    return (
        <main>{players.length ? (
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