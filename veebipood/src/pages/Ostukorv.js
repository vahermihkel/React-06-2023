import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(["Coca cola", "Fanta", "Sprite"]);

  return ( // sort((a,b) =>)      filter(e => )
    <div>
      {ostukorv.map((toode, indeks) => <div key={indeks}>{toode}</div>)}
      Ostukorv on tühi.
      <Link to="/">Mine tooteid lisama</Link>
    </div>
  )
}

export default Ostukorv