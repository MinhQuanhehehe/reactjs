import React from 'react'
import { useRef } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddPlayer = ({ newPlayer, setNewPlayer, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="w-full flex justify-around m-4 border-gray-200 a flex-wrap gap-2 p-2" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="playerName" className='sr-only'>Player Name</label>
      <TextField 
        variant="outlined" 
        className='grow focus:bg-slate-400'
        autoFocus
        ref={inputRef}
        id="playerName"
        type='text'
        label="Player Name"
        required
        value={newPlayer.name}
        onChange={(e) => {
          setNewPlayer((newPlayer) => ({
            ...newPlayer, name: e.target.value
          }))
        }}
      />
      <label htmlFor="playerNumber" className='sr-only'>Player Number</label>
      <TextField 
        variant="outlined"
        className="grow focus:bg-slate-400"
        id="playerNumber"
        type='number'
        label='Player Number'
        required
        value={newPlayer.number === 0 ? '' : newPlayer.number}
        onChange={(e) => {
          setNewPlayer((newPlayer) => ({
            ...newPlayer, number: e.target.value === '' ? 0 : Number(e.target.value)
          }))
        }}
      />
      <label htmlFor="playerNation" className='sr-only'>Player Nation</label>
      <TextField 
        variant="outlined"
        className='grow focus:bg-slate-400'
        id="playerNation"
        type='text'
        label='Player Nation'
        required
        value={newPlayer.nation}
        onChange={(e) => {
          setNewPlayer((newPlayer) => ({
            ...newPlayer, nation: e.target.value
          }))
        }}
      />
      <Button
        className= 'hover:bg-green-500'
        variant='contained'
        type='submit'
        aria-label='Add Player'
        onClick={() => inputRef.current.focus()}
      >
        Add
      </Button>
    </form>
  )
}

export default AddPlayer