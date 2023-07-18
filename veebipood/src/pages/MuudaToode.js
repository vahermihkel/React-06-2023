import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const { jrknr } = useParams();
  const leitud = tootedFailist[jrknr];
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
  const navigate = useNavigate(); // useHistory();

  const muuda = () => {
    tootedFailist[jrknr] = {
      "nimi": nimiRef.current.value, 
      "hind": Number(hindRef.current.value), 
      "aktiivne": aktiivneRef.current.checked, 
      "pilt": piltRef.current.value
    }
    navigate("/halda");
  }

  return (
    <div>
     {leitud !== undefined &&
      <div>
        <label>Toote nimi</label> <br />
        <input ref={nimiRef} defaultValue={leitud.nimi} type="text" /> <br />
        <label>Toote hind</label> <br />
        <input ref={hindRef} defaultValue={leitud.hind} type="number" /> <br />
        <label>Toote pilt</label> <br />
        <input ref={piltRef} defaultValue={leitud.pilt} type="text" /> <br />
        <label>Toote aktiivsus</label> <br />
        <input ref={aktiivneRef} defaultChecked={leitud.aktiivne} type="checkbox" /> <br />
        <button onClick={muuda}>Muuda</button> <br />
      </div>}

      {leitud === undefined && <div>Toodet ei leitud</div> }
    </div>
  )
}

export default MuudaToode