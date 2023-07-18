import React from 'react';
import { useParams } from 'react-router-dom';
import tootedFailist from "../data/tooted.json";

function YksikToode() {
        // kui on kandilised    const [muutuja, funktsioon] = useState() <--- 
        //                peab olema täpselt nii mitu tk nagu ette antud
        // kui on loogelised sulud, siis võib olla palju tahes
  const { index } = useParams(); // useParams on Reacti Hook
                      // Reacti hookid: useState, useRef, useParams, useNavigate
  const leitud = tootedFailist[index];

  // HOOKid (Reacti erikood)
  // 1. algab alati use'ga
  // 2. alati on sulud lõpus
  // 3. alati tuleb importida
  // 4. ta ei tohi olla funktsiooni sees
  // 5. ta ei tohi olla dünaamiliselt loodud

  // undefined  --> tühjus, mille tüüpi ka ei teata (sõna, number, boolean)
  // null --> tühjus, mille tüüpi teatakse, on nt sõna

  return (
    <div>
      
      {leitud !== undefined &&
      <>
        <div>Toote järjekorranumber: {index}</div>
        <div>Toote nimi: {leitud}</div>
        <div>Toote .... : </div>
      </>}

      { leitud === undefined && <div>Toodet ei leitud!</div> }
    </div>
  )
}

export default YksikToode