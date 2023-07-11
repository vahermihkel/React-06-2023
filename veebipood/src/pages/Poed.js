import React, { useState } from 'react'
import poedFailist from "../data/poed.json";

function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist);

  const reset = () => {
    uuendaPoed(poedFailist);
  }

  const sorteeriAZ = () => {
    //poed.sort(); // default sorteerimine, sorteerib A-Z kui on tegemist sõnade array'ga
    poed.sort((a,b) => a.localeCompare(b, "et")); // localeCompare on sõnade võrdlemine mis tagastab numbri
    uuendaPoed(poed.slice());
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.localeCompare(a, "et"));
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKasv = () => { // eight   length
    poed.sort((a,b) => a.length - b.length);
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKah = () => {
    poed.sort((a,b) => b.length - a.length);
    uuendaPoed(poed.slice());
  }

  const sorteeriKolmasTaht = () => {                    // 012         012      012
    poed.sort((a,b) => a[2].localeCompare(b[2], "et")); // Kristiine   Viimsi   Vesse
    uuendaPoed(poed.slice());
  }

  const filtreeriEgaLoppevad = () => {
    // poed: array  --->   .filter, .sort, .map, .length
    // yksPood: string ---> .endsWith, .startsWith, .localeCompare, .includes, .length 
    const uuedPoed = poed.filter(yksPood => yksPood.endsWith("e"));
    uuendaPoed(uuedPoed);
  }

  const filtreeriSisaldabIsLyhendit = () => {
    // includes()
    const uuedPoed = poed.filter(yksPood => yksPood.includes("is"));
    uuendaPoed(uuedPoed);
  }

  const filtreeriPikkus9 = () => {
    // .length ===
    const uuedPoed = poed.filter(yksPood => yksPood.length === 9);
    uuendaPoed(uuedPoed);
  }

  const filtreeriVahemalt7Tahte = () => {
    // .length >=
    const uuedPoed = poed.filter(yksPood => yksPood.length >= 7);
    uuendaPoed(uuedPoed);
  }

  const filtreeriKolmasTahtI = () => {    // 012
    // [2] === "i"                        // Kristiine
    const uuedPoed = poed.filter(yksPood => yksPood[2] === "i" );
    uuendaPoed(uuedPoed);
  }

  return (
    <div>
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
      {poed.map(yksPood => <div key={yksPood}>{yksPood}</div>)}
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