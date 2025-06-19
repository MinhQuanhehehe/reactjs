import React from 'react'
import { useRef } from 'react'

const AddPlayer = ({ newPlayer, setNewPlayer, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="playerName">Player Name</label>
      <input
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
      <label htmlFor="playerNumber">Player Number</label>
      <input
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
      <label htmlFor="playerNation">Player Nation</label>
      <input
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