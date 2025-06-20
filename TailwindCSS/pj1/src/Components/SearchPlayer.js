import React from 'react'

const SearchPlayer = ({ search, setSearch }) => {
    return (
        <form className='w-full flex justify-between mt-2 mb-0 pt-0 pr-2 pb-1 pl-2 border-b border-gray-200 a px-4 py-2' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search' className='sr-only'>Search</label>
            <input
                className='w-full border-2 h-10 rounded bg-gray-300 text-center'
                id='search'
                type='text'
                placeholder='Search Player'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchPlayer