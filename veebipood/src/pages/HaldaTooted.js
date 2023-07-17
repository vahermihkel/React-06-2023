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
            {toode}
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