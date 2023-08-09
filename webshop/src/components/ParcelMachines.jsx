import React, { useEffect, useState } from 'react'

function ParcelMachines() {
  // API päring võtab aega. senikaua kuni API päring saab valmis, on väärtuseks see, 
  //        mis on useState sulgude sees
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => { // useEffecti kasutame kui lehe tulles tehakse API päring
    fetch("https://www.omniva.ee/locations.json") // URL, kuhu päring tehakse
      .then(res => res.json()) // response, kogu tagastus koos metaandmetega (nt staatuskood)
      .then(json => setParcelMachines(json)) // json sees on lehekülje sisu (sama mida näen veebisaidil)
  }, []);

  return (
    <select>{parcelMachines.filter(pm => pm.A0_NAME === "EE").map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}</select>
  )
}

export default ParcelMachines