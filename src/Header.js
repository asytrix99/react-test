import React from 'react'

const Header = () => {
    const headerStyle = {
        backgroundColor: 'royalblue',
        textAlign: 'center',
        width: 300,
        color: 'white',
        margin: 'auto',
        padding: '0px',
        fontFamily: 'cursive'
    }
    
  return (
    <header style={headerStyle}>
        <h1>Groceries List</h1>
    </header>
  )
}

export default Header