import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json";
import ostukorvFailist from "../data/ostukorv.json";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const lisaOstukorvi = (toode) => {
    ostukorvFailist.push(toode);
    toast.success("Edukalt ostukorvi lisatud!");
  }

  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKasv = () => {
    tooted.sort((a,b) => a.hind - b.hind);
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKah = () => {
    tooted.sort((a,b) => b.hind - a.hind);
    uuendaTooted(tooted.slice());
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriHindKasv}>Sorteeri hind kasvavalt</button>
      <button onClick={sorteeriHindKah}>Sorteeri hind kahanevalt</button>
      {tooted.map((toode, index) => 
          <div key={index}>
            <img className="pilt" src={toode.pilt} alt="" />
            {toode.nimi} - {toode.hind} €
            <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
            <Link to={"/toode/" + index}>
              <button>Vaata detailsemalt</button>
            </Link>
          </div>
        )}
      <ToastContainer 
            position="bottom-right"
            autoClose={4000}
            theme="dark"
        />
    </div>
  )
}

export default Tooted