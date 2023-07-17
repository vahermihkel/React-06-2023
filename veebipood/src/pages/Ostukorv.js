import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {                  
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);

  const tyhjenda = () => {
    ostukorv.splice(0);
    uuendaOstukorv(ostukorv.slice());
  }

  const eemalda = (indeks) => {
    ostukorv.splice(indeks,1); // kustutamiseks, mitmendat ma kustutan, mitu tk kustutan
    uuendaOstukorv(ostukorv.slice()); // splice     slice
  }

  const lisa = (toode) => {
    ostukorv.push(toode); // tekib lõppu, aga HTML ei uuene
    uuendaOstukorv(ostukorv.slice()); // HTML uuenduseks
  }

  return ( // sort((a,b) =>)      filter(e => )
    <div>
      <button onClick={tyhjenda}>Tühjenda</button>
      <div>Kokku: {ostukorv.length} tk</div>
      {ostukorv.map((toode, indeks) => 
        <div key={indeks}>
          {toode}
          <button onClick={() => eemalda(indeks)}>x</button>
          <button onClick={() => lisa(toode)}>+</button>
        </div>)}
      Ostukorv on tühi.
      <Link to="/">Mine tooteid lisama</Link>
    </div>
  )
}

// onClick sees kui kirjutan ainult sulu lõppu, siis ei oodata klikki ära vaid pannakse koheselt käima
// render   renderdamine   HTMLi väljaprintimine

export default Ostukorv