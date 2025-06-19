import React from 'react'
import Li from './Li'

const Ul = ({ players, handleCheck, handleDelete }) => {
    return (
        <ul className="w-full list-none px-1 pb-1">
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