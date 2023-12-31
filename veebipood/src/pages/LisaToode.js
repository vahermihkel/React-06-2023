import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json";
import { ToastContainer, toast } from 'react-toastify';


// tumesinine - tavaline tag
// roheline - võõras tag, mis tuleb importida
// helesinine - tagi omadused   className, src, alt, path, element
// oranž - jutumärkides väärtus

// tumesinine - sissekirjutatud tüüp
// roheline - võõras klass
// helesinine - muutuja omadused
// oranž - jutumärkides väärtus
// kollane - funktsioon, taaskasutatav koodiblokk, lõppeb enamustel juhtudel sulgudega
// tavaline sinine - muutuja, millel on muutuv väärtus
// lilla - import, from, export, if, else, return - sissekirjutatud funktsionaalsus

// [] - useState võrdusmärgist vasakul pool, esimene on muutuja, teine on millega teda muuta
// {} - JS-s koodiblokk, HTML-s dünaamika tekitaja
// () - funktsioonide väljakutsumiseks   if () <--- if'i tingimuse lugemiseks
// =  - väärtuse andmiseks
// === - võrdluseks kas vasak ja parem pool on identsed
// >  <   >=   - numbrite võrdlemiseks suurem / väiksem / suurem-võrdne
// &&  -   kui vasakul pool on tõde, siis näita
// ;  - rea lõpetamiseks
// ! - keera vastupidiseks     !true ---> false      !==   ei võrdu ---> ===

function LisaToode() {
  const [sonum, uuendaSonum] = useState("");
  const inputiLuger = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
  // const kuupaev = new Date();

  // ES5   EchmaScript5
  // function lisa() {

  // }

  // ES6   - aastast 2015
  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum("Tühja nimetusega toodet ei saa lisada!");
      toast.error("Tühja nimetusega toodet ei saa lisada!");
    } else {
      uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
      //tootedFailist.push(inputiLuger.current.value);
      
      tootedFailist.push(
        {
          "nimi": inputiLuger.current.value, 
          "hind": Number(hindRef.current.value), // väärtus tuleb numbrina 
          "aktiivne": aktiivneRef.current.checked, // väärtus tuleb booleanina 
          "pilt": piltRef.current.value
        }
      );
      
      toast.success("Edukalt " + inputiLuger.current.value +  " lisatud!");
      inputiLuger.current.value = "";
      hindRef.current.value = "";
      piltRef.current.value = "";
      aktiivneRef.current.checked = false;
      // lisa andmebaasi
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneRef} type="checkbox" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
      <ToastContainer 
        position="bottom-right"
        autoClose={4000}
        theme={localStorage.getItem("teema") === "tume" ? "light" : "dark"}
      />
    </div>
  )
}

export default LisaToode