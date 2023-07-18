import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json";
import { Link } from 'react-router-dom';

function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const kustuta = (jrknr) => {
    tootedFailist.splice(jrknr,1);
    uuendaTooted(tootedFailist.slice());
  }

  return (
    <div>
      {tooted.map((toode, jrknr) => 
          <div>
            <div>{toode.nimi}</div>
            <div>{toode.hind} €</div>
            <div>{toode.pilt}</div>
            <div><img className="pilt" src={toode.pilt} alt="" /></div>
            <button onClick={() => kustuta(jrknr)}>Kustuta</button>
            <Link to={"/muuda/" + jrknr}>
              <button>Muuda</button>
            </Link>
          </div>
        )}
    </div>
  )
}

export default HaldaTooted