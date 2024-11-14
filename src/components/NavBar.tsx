import React from 'react'
import "../style/Navbar.css"

type Props = {}

function NavBar({}: Props) {
  return (
    <div className='navbar '>
      <div className='espacio'></div>
      <div className="logo"><i className="bi bi-emoji-dizzy"></i></div>
      <div className='icons'>
        <i className="bi bi-bag-heart"></i>
        <i className="bi bi-person-circle"></i>
        <i className="bi bi-cart3"></i>
      </div>
    </div>
  )
}

export default NavBar