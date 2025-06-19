import React from 'react'

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
            MY DREAM TEAM
        </header>
    )
}

export default Header;