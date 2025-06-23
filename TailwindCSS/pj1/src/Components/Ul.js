import React from 'react'
import Li from './Li'

const Ul = ({ players, handleCheck, handleDelete }) => {
    return (
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-none p-1">
            {players.map((player) => (
                <Li
                    key = {player.playerId}
                    player={player}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}

        </ul>
    )
}

export default Ul