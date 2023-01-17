import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
        <span className="logo" >Orias Chat</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <p>John</p>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar