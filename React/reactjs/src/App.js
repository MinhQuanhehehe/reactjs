import logo from './logo.svg';
import AddPlayer from './Components/AddPlayer';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import SearchPlayer from './Components/SearchPlayer';
import { useState, useEffect } from 'react'

function App() {
  const [players, setPlayers] = useState(JSON.parse(localStorage.getItem('playerlist')) || []);
  const [newPlayer, setNewPlayer] = useState(
    {
      name: '',
      number: 0,
      nation: ''
    }
  );
  const [search, setSearch] = useState('');
  useEffect(() => {localStorage.setItem('playerlist', JSON.stringify(players));}, [players]);

  const setAndSave = (listPlayers) => {
    setPlayers(listPlayers);
  }

  const addPlayer = (player) => {
    const playerId = players.length ? players[players.length - 1].playerId + 1 : 1;
    const newPlayerObj = {
      checked: false,
      playerId: playerId,
      name: player.name,
      number: player.number,
      nation: player.nation
    }
    const listPlayers = [...players, newPlayerObj];
    setAndSave(listPlayers);
  }

  const handleCheck = (id) => {
    const listPlayers = players.map((player) => player.playerId === id ? { ...player, checked: !player.checked } : player)
    setPlayers(listPlayers);
    setAndSave(listPlayers);

  }
  const handleDelete = (id) => {
    const listPlayers = players.filter((player) => player.playerId !== id);
    setPlayers(listPlayers);
    setAndSave(listPlayers);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(newPlayer);
    setNewPlayer({
      name: '',
      number: 0,
      nation: ''
    })
  }
  return (
    <div className="App" >
      <Header />
      <AddPlayer
        newPlayer={newPlayer}
        setNewPlayer={setNewPlayer}
        handleSubmit={handleSubmit}
      />
      <SearchPlayer
        search={search}
        setSearch={setSearch}
      />
      <Content
        players={players.filter((player) => {
          const playerName = player.name.toLowerCase();
          const keyword = search.toLowerCase();

          for (let i = 0; i <= playerName.length - keyword.length; i++) {
            let match = true;
            for (let j = 0; j < keyword.length; j++) {
              if (playerName[i + j] !== keyword[j]) {
                match = false;
                break;
              }
            }
            if (match) return true;
          }

          return false;
        })}
        setPlayers={setPlayers}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        length={players.length}
      />
    </div >
  );
}

export default App;
