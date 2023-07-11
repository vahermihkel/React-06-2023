import React, { useState } from 'react'

function Poed() {
  const [poed, uuendaPoed] = useState(["Ülemiste", "Viimsi", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);

  return (
    <div>
      <div>Ülemiste</div>
      <div>Viimsi</div>
      <div>Rocca al Mare</div>
      <div>Magistrali</div>
      <div>Vesse</div>
      <div>Kristiine</div>
      <div>Järveotsa</div>
    </div>
  )
}

export default Poed