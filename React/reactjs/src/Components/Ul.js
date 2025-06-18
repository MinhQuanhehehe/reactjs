import React from 'react'
import Li from './Li'

const Ul = ({ players, handleCheck, handleDelete }) => {
    return (
        <ul>
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