import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const { jrknr } = useParams();
  const leitud = tootedFailist[jrknr];

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input defaultValue={leitud} type="text" /> <br />
      <button>Muuda</button> <br />
    </div>
  )
}

export default MuudaToode