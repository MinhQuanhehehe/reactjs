import React from 'react'

const Li = ({ player, handleCheck, handleDelete }) => {
    return (
        <li className="flex justify-between items-center py-2 pl-2 mb-1 bg-gray-200 rounded first:mt-0" key={player.playerId}>
            <input type='checkbox' className="w-12 h-12 min-w-[48px] min-h-[48px] cursor-pointer mr-2" checked={player.checked} onChange={() => handleCheck(player.playerId)} />
            <label>{player.name} --- {player.nation} --- {player.number}</label>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2" onClick={() => handleDelete(player.playerId)}>Delete</button>
        </li>
    )
}

export default Li