import logo from '../logo.svg';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { useState } from 'react'

function App() {
  const [players, setPlayers] = useState([
    {
      checked: false,
      playerId: 1,
      name: "Ronaldo",
      number: 7,
      nation: "Portugal"
    }
    ,
    {
      checked: false,
      playerId: 2,
      name: "Messi",
      number: 10,
      nation: "Argentina"
    }
    ,
    {
      checked: false,
      playerId: 3,
      name: "Hai",
      number: 10,
      nation: "Viet Nam"
    }
  ])
  const handleCheck = (id) => {
    const listPlayers = players.map((player) => player.playerId === id ? { ...player, checked: !player.checked } : player)
    setPlayers(listPlayers);
  }
  const handleDelete = (id) => {
    const listPlayers = players.filter((player) => player.playerId !== id);
    setPlayers(listPlayers);
  }
  return (
    <div className="App" >
      <Header />
      <Content
        players={players}
        setPlayers={setPlayers}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
      length = {players.length} 
      />
    </div >
  );
}

export default App;
