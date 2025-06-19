import React from 'react'
import { useRef } from 'react'

const AddPlayer = ({ newPlayer, setNewPlayer, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="w-full flex justify-between m-4 border-gray-200 a" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="playerName" className='sr-only'>Player Name</label>
      <input
        className='grow border-2 mx-2 rounded bg-gray-300 text-center'
        autoFocus
        ref={inputRef}
        id="playerName"
        type='text'
        placeholder='Player Name'
        required
        value={newPlayer.name}
        onChange={(e) => {
          setNewPlayer((newPlayer) => ({
            ...newPlayer, name: e.target.value
          }))
        }}
      />
      <label htmlFor="playerNumber" className='sr-only'>Player Number</label>
      <input
        className="grow border-2 mx-2 rounded bg-gray-300 text-center"
        id="playerNumber"
        type='number'
        placeholder='Player Number'
        required
        value={newPlayer.number === 0 ? '' : newPlayer.number}
        onChange={(e) => {
          setNewPlayer((newPlayer) => ({
            ...newPlayer, number: e.target.value === '' ? 0 : Number(e.target.value)
          }))
        }}
      />
      <label htmlFor="playerNation" className='sr-only'>Player Nation</label>
      <input
        className='grow border-2 mx-2 rounded bg-gray-300 text-center'
        id="playerNation"
        type='text'
        placeholder='Player Nation'
        required
        value={newPlayer.nation}
        onChange={(e) => {
          setNewPlayer((newPlayer) => ({
            ...newPlayer, nation: e.target.value
          }))
        }}
      />
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2'
        type='submit'
        aria-label='Add Player'
        onClick={() => inputRef.current.focus()}
      >
        Add
      </button>
    </form>
  )
}

export default AddPlayer