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

  const arvutaKogusumma = () => {
    let summa = 0; // [{n: "T", h: 25},{n: "N", h: 55}]
          // {n: "T", h: 25}   25   =   0   +   25
          // {n: "N", h: 55}   80   =   25  +   55
    ostukorv.forEach(toode => summa = summa + toode.hind);
    return summa;
  }

  return ( // sort((a,b) =>)      filter(e => )
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      {ostukorv.length > 0 && <div>Kokku: {ostukorv.length} tk</div>}
      {ostukorv.map((toode, indeks) => 
        <div key={indeks}>
          {toode.nimi} - {toode.hind} €
          <button onClick={() => eemalda(indeks)}>x</button>
          <button onClick={() => lisa(toode)}>+</button>
        </div>)}
      {ostukorv.length === 0 && 
        <div>
          Ostukorv on tühi.
          <Link to="/tooted">Mine tooteid lisama</Link>
        </div>}
        {ostukorv.length > 0 && <div>Kokku: {arvutaKogusumma()} €</div>}
    </div>
  )
}

// onClick sees kui kirjutan ainult sulu lõppu, siis ei oodata klikki ära vaid pannakse koheselt käima
// render   renderdamine   HTMLi väljaprintimine

export default Ostukorv