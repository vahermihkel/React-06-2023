// Simple React Snippets
//rfce

import React, { useState } from 'react'

function Avaleht() {
  const [kogus, uuendaKogus] = useState(5); // number - saan liita, lahutada, korrutada, jagada, suurema kontrolli teha
  const [laigitud, uuendaLaigitud] = useState(false); //kahendväärtus - boolean, kas on või ei ole
  const [sonum, uuendaSonum] = useState("Uuenda kogust!"); // sõne - string, sõnaline väärtus

  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Panid koguse nulli!");
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("Vähendasid kogust!");
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Suurendasid kogust!");
  }

  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      {laigitud}
      <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda like-i</button>
      <button onClick={() => uuendaLaigitud(true)}>Muuda laigituks</button>
      <button onClick={() => uuendaLaigitud(false)}>Muuda mittelaigituks</button>
      <br /><br />
      <div>{sonum}</div>
      {/* {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>} */}
      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      {kogus}
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht