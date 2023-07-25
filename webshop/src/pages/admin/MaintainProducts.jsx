import React from 'react'
import productsFromFile from '../../data/products.json'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


function MaintainProducts() {

  const [products, setProducts] = useState(productsFromFile);

  const { t } = useTranslation();

  const deleteProduct = (index) => {
    // const index = productsFromFile.findIndex(product => product.id === productId);
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
  }

// localhost:3000/admin/maintain-products/admin/edit-product     to="admin/edit-product"
// localhost:3000/admin/edit-product                             to="/admin/edit-product"
  return (
    <div>
      <div className='bold-heading'>{t('maintain-products')}</div><br />
      {products.map((product, index) =>
        <div key={product.id}>
          <img src={product.image} alt='' />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <div>{product.active}</div>
          <Button onClick={() => deleteProduct(index)}>Kustuta</Button><br /><br />
          <Button as={Link} to={"/admin/edit-product/" + product.id}>Muuda</Button>
        </div>
      )}

    </div>
  )
}


export default MaintainProducts