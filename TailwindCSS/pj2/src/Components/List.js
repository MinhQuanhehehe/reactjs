import React from 'react'
import { useState } from 'react';

const List = ({ data }) => {
    const [clickedItem, setClickedItem] = useState([]);
    const handleClick = (id) => {
        if (clickedItem.includes(id)) {
            setClickedItem(clickedItem.filter(item => item !== id));
        } else {
            setClickedItem([...clickedItem, id]);
        }
        console.log(`Clicked item ID: ${id}`);
        console.log(`Current clicked items: ${clickedItem}`);
    }
    return (
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 list-none p-1">
            {data.map((item) => (
                <li
                    key={item.id}
                    className="bg-white shadow-md rounded-lg p-4 flex flex-col"
                    onClick={() => handleClick(item.id)}
                >
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-700">{item.username}</p>
                    <span className="text-sm text-gray-500">Email: {item.email}</span>
                    {clickedItem.includes(item.id) && (
                        <div>
                            <p className="text-sm text-gray-500">Phone: {item.phone}</p>
                            <p className="text-sm text-gray-500">Website: {item.website}</p>
                        </div>
                    )
                    }
                </li>
            ))}
        </ul>
    )
}

export default List