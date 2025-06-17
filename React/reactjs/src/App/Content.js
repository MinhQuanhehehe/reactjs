import React from 'react'
import { useState } from 'react'
import Ul from './Ul'

const Content = ({players, handleCheck, handleDelete}) => {
    return (
        <main>
            <Ul
            players={players}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />
        </main>
    )
}

export default Content