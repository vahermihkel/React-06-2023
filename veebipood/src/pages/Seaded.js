import React, { useState } from 'react'
// rfce

// KODUS: Keel localStorage-sse
function Seaded() {
  const [keel, uuendaKeel] = useState("est");

  return (
    <div>
      <button onClick={() => uuendaKeel("est")}>Eesti keel</button>
      <button onClick={() => uuendaKeel("eng")}>English</button>
      <button onClick={() => uuendaKeel("rus")}>Pycckij</button>
      {keel === "est" && <div>Leht on eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Pycckij jazõk</div>}
    </div>
  )
}

export default Seaded