import React, { useState } from 'react'
import poedFailist from "../data/poed.json";
import { Link } from 'react-router-dom';

function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist);

  const reset = () => {
    uuendaPoed(poedFailist);
  }

  const sorteeriAZ = () => {
    //poed.sort(); // default sorteerimine, sorteerib A-Z kui on tegemist sõnade array'ga
    poed.sort((a,b) => a.nimetus.localeCompare(b.nimetus, "et")); // localeCompare on sõnade võrdlemine mis tagastab numbri
    uuendaPoed(poed.slice());
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.nimetus.localeCompare(a.nimetus, "et"));
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKasv = () => { // eight   length
    poed.sort((a,b) => a.nimetus.length - b.nimetus.length);
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKah = () => {
    poed.sort((a,b) => b.nimetus.length - a.nimetus.length);
    uuendaPoed(poed.slice());
  }

  const sorteeriKolmasTaht = () => {                    // 012         012      012
    poed.sort((a,b) => a.nimetus[2].localeCompare(b.nimetus[2], "et")); // Kristiine   Viimsi   Vesse
    uuendaPoed(poed.slice());
  }

  const filtreeriEgaLoppevad = () => {
    // poed: array  --->   .filter, .sort, .map, .length
    // yksPood: string ---> .endsWith, .startsWith, .localeCompare, .includes, .length 
    const uuedPoed = poed.filter(yksPood => yksPood.nimetus.endsWith("e"));
    uuendaPoed(uuedPoed);
  }

  const filtreeriSisaldabIsLyhendit = () => {
    // includes()
    const uuedPoed = poed.filter(yksPood => yksPood.nimetus.includes("is"));
    uuendaPoed(uuedPoed);
  }

  const filtreeriPikkus9 = () => {
    // .length ===
    const uuedPoed = poed.filter(yksPood => yksPood.nimetus.length === 9);
    uuendaPoed(uuedPoed);
  }

  const filtreeriVahemalt7Tahte = () => {
    // .length >=
    const uuedPoed = poed.filter(yksPood => yksPood.nimetus.length >= 7);
    uuendaPoed(uuedPoed);
  }

  const filtreeriKolmasTahtI = () => {    // 012
    // [2] === "i"                        // Kristiine
    const uuedPoed = poed.filter(yksPood => yksPood.nimetus[2] === "i" );
    uuendaPoed(uuedPoed);
  }

  // HTMLs on ilma klikki ootamata (sulud on lõpus), seega ei saa siia sisse
  // panna ühtegi useState funktsiooni
  const arvutaTahedKokku = () => {
    let summa = 0; // let muutuja on muutuja, millele saan uut väärtust panna
    poed.forEach(yksPood => summa = summa + yksPood.nimetus.length);
    //poed.forEach(yksPood => summa += yksPood.length);
    return summa;
  }

  return (
    <div>
      <div>{arvutaTahedKokku()}</div>
      <button onClick={reset}>Reset</button>
      <div>Kokku: {poed.length} tk</div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähtede arv kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähtede arv kahanevalt</button>
      <button onClick={sorteeriKolmasTaht}>Sorteeri kolmanda tähe järgi A-Z</button>
      <br /><br />
      <button onClick={filtreeriEgaLoppevad}>Jäta alles e'ga lõppevad</button>
      <button onClick={filtreeriSisaldabIsLyhendit}>Jäta alles kes sisaldavad "is" lühendit</button>
      <button onClick={filtreeriPikkus9}>Jäta alles kellel pikkus on 9 tähemärki</button>
      <button onClick={filtreeriVahemalt7Tahte}>Jäta alles kellel pikkus on vähemalt 7 tähemärki</button>
      <button onClick={filtreeriKolmasTahtI}>Jäta alles kellel kolmas täht on "i"</button>
      {poed.map(yksPood => 
        <div key={yksPood.nimetus}>
          {yksPood.nimetus}
          <Link to={"/pood/" + yksPood.nimetus.toLowerCase().replaceAll(" ", "-").replaceAll("ü","u")}>
            <button>Vaata detailsemalt</button>
          </Link>
        </div>)}
      {/* <div>Ülemiste</div>
      <div>Viimsi</div>
      <div>Rocca al Mare</div>
      <div>Magistrali</div>
      <div>Vesse</div>
      <div>Kristiine</div>
      <div>Järveotsa</div> */}
    </div>
  )
}

export default Poed