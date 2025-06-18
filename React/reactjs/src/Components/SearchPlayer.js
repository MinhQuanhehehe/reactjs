import React from 'react'

const SearchPlayer = ({ search, setSearch }) => {
    return (
        <form className='SearchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>Search</label>
            <input
                id='search'
                type='text'
                placeholder='Search Item'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchPlayer