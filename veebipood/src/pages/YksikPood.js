import React from 'react'
import poedFailist from "../data/poed.json" 
import { useParams } from 'react-router-dom';

function YksikPood() {
    const {yksPood} = useParams(); //Reacti hookid: useState, useRef, useParams
  // KUI LEIAN JÄRJEKORRANUMBRI ALUSEL:  const leitud = poedFailist[index]; 
  // KUI LEIAN MINGI OMADUSE ALUSEL (nimetus), siis kasutan .find() tsüklit:
  const leitud = poedFailist.find(pood => pood.nimetus.toLowerCase().replaceAll(" ", "-").replaceAll("ü","u") === yksPood);

  return (
    <div>
        { leitud !== undefined && 
        <div>
          <div>Poe nimi: {leitud.nimetus} </div>
          <div>Poe lahtiolekuaeg: {leitud.aeg} </div>
          <div>Poe telefoninumber: {leitud.tel} </div>
        </div>}

        {leitud === undefined && <div>Poodi ei leitud</div>}
    </div>
  )
}

export default YksikPood