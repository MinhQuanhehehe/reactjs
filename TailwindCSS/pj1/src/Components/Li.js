import React from 'react'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const Li = ({ player, handleCheck, handleDelete }) => {
    return (
        <li className="bg-white border border-gray-300 shadow-md rounded-lg p-4 flex justify-between items-center" key={player.playerId}>
            <Checkbox size='large' className="" checked={player.checked} onChange={() => handleCheck(player.playerId)} />
            <p>{player.name} --- {player.nation} --- {player.number}</p>
            <Button variant="contained" className=" hover:bg-red-500 active:bg-red-500" onClick={() => handleDelete(player.playerId)}>Delete</Button>
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2 active:bg-red-500" onClick={() => handleDelete(player.playerId)}>Delete</button> */}
        </li>
    )
}

export default Li