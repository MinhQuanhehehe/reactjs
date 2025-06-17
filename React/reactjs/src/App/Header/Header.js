import React from 'react'
import '../Header/Header.css'
const Header = () => {
    let ronaldo = {
        number: 7,
        age: 41,
        siu: () => {
            return "Siuuu";
        }
    }
    let messi = {
        number: 10,
        age: 39,
        hasWorldCup: () => {
            return "having World Cup";
        }
    }
    let player = [ronaldo, messi]
    return (
        <header className="App-header">
            <p>
                OMG Ronaldo at {ronaldo.age} years old is continuing {ronaldo.siu()}
            </p>
            <p>
                But Messi is {messi.hasWorldCup()}
            </p>
            <p>
                Anyway it's {messi.number} to {ronaldo.number} now
            </p>
            <ul>
                {player.map((x, i) => (
                    <li>Number: {x.number} - Age: {x.age}</li>
                ))}
            </ul>
        </header>
    )
}

export default Header;