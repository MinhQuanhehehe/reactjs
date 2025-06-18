import React from 'react'

const Li = ({ player, handleCheck, handleDelete }) => {
    return (
        <li className="player" key={player.playerId}>
            <input type='checkbox' checked={player.checked} onChange={() => handleCheck(player.playerId)} />
            <label>{player.name} --- {player.nation} --- {player.number}</label>
            <button onClick={() => handleDelete(player.playerId)}>Delete</button>
        </li>
    )
}

export default Li