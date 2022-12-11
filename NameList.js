import React from 'react'
import planet from './Planet.css'

function NameList() {
    const names = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune']
  return (
    <div>
      {
        names.map(planet => <table><tr><td>{planet}</td></tr></table>)
      }
    </div>
  )
}

export default NameList