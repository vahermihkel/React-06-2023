import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";
import { Button } from 'react-bootstrap';

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  return (
    <div>
      <button>Sorteeri A-Z</button>
      <button>Sorteeri Z-A</button>
      <button>Sorteeri hind kasvavalt</button>
      <button>Sorteeri hind kahanevalt</button>
      {products.map(product => 
        <div>
          <img src={product.image} alt="" />
          <div>{product.name}</div>
          <div>{product.price}</div>
          <Button>Lisa ostukorvi</Button>
        </div>)}
    </div>
  )
}

export default HomePage