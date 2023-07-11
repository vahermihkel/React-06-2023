import React, { useState } from 'react'

function Hinnad() {
  // HTMLi uuenduseks
  const [hinnad, uuendaHinnad] = useState([23, 42, 10, 99, 14, 15, 10]);

  const reset = () => {
    uuendaHinnad([23, 42, 10, 99, 14, 15]);
  }

  const hinnadKasvavalt = () => {
    // .sort -> sissekirjutatud funktsionaalsus JavaScripti
    // noole ees on sulud -> sellepärast, et kui on 2+ asja noole ees, peab panema sulud 
    hinnad.sort((a, b) => a - b);
    uuendaHinnad(hinnad.slice()); // <- mina jään kasutama
    //uuendaHinnad([...hinnad]); // <- chatGPT
  }

  const hinnadKahanevalt = () => {
    hinnad.sort((a, b) => b - a); // mutates on dokumentatsioonis kirjas (ei uuenda mälukohta ehk muudatusi ei ole näha)
    uuendaHinnad(hinnad.slice());
  }

  const filteeriSuuremadKui20 = () => {
    // returns on dokumentatsioonis ehk tagastab uue array uue mälukohaga ning see tuleb kuhugi muutujasse panna
    const filtreeritudHinnad = hinnad.filter(hind => hind > 20); 
    uuendaHinnad(filtreeritudHinnad);
  }

  const filtreeriVaiksemadKui50 = () => {
    const filtreeritudHinnad = hinnad.filter(hind => hind < 50); 
    uuendaHinnad(filtreeritudHinnad);
  }

  const arvutaKokku = () => {
    let summa = 0;
    // forEach -> tee iga elemendi kohta mingi funktsionaalsus
    //              23  =>  23   =   0   +  23
    //              42  =>  65   =  23   +  42
    //              10  =>  75   =  65   +  10
    hinnad.forEach(hind => summa = summa + hind);
    return summa;
  }

  // iga kord kui tahame array'd välja kuvada HTMLs, kasutame .map() funktsionaalsust
  // .map on tsükkel mis käivitud nii mitu korda kui palju on elemente
  // noole järel pean ütlema mis HTMLi ma igaühe kohta näitan
  // noole ees tähistan muutuvat elementi

  // hind: 23, 42, 10, 99, 14, 15, 10
  // index: 0  1    2   3   4   5  6
  return (
    <div>
      <button onClick={reset}>Taasta originaal</button>
      <button onClick={hinnadKasvavalt}>Hind kasvavalt</button>
      <button onClick={hinnadKahanevalt}>Hind kahanevalt</button>
      <button onClick={filteeriSuuremadKui20}>Jäta alles suuremad kui 20</button>
      <button onClick={filtreeriVaiksemadKui50}>Jäta alles väiksemad kui 50</button>
      {hinnad.map((hind, index) => <div key={index}>{hind} €</div>)}
      <div>Kokku: {arvutaKokku()} €</div>
    </div>
  )
}

export default Hinnad