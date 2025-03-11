import React from 'react'
import { NavLink } from 'react-router-dom'
const navbar = () => {
  return (
    <div>
      <NavLink to="/">
        Home
      </NavLink>
      " "
      <NavLink to="/pastes">
        Pastes
      </NavLink>
      " "
      <NavLink to="/remove_paste">
        Remove Paste
      </NavLink>
    </div>
  )
}

export default navbar
