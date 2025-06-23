import React from 'react'
import TextField from '@mui/material/TextField'

const SearchPlayer = ({ search, setSearch }) => {
    return (
        <form className='w-full flex justify-between mb-2 p-2' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search' className='sr-only'>Search</label>
            <TextField
                className='w-full text-center'
                id='search'
                type='text'
                label='Search Player'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchPlayer