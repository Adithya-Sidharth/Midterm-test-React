import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <Link to='/home' style={{textDecoration:"none", marginRight:"10px"}}>Home</Link>
        <Link to='/form' style={{textDecoration:"none", marginRight:"10px"}}>Form</Link>
        <Link to='/input' style={{textDecoration:"none", marginRight:"10px"}}>Input</Link>
        <Link to='/counter' style={{textDecoration:"none", marginRight:"10px"}}>Counter</Link>
    </>
  )
}

export default Navbar