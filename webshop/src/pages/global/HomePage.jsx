import React from 'react'
import productsFromFile from '../../data/products.json'
import cartFile from '../../data/cart.json' // relatiivne import
import { useState } from 'react';
import { Button } from 'react-bootstrap';
// import { Slide, ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

function HomePage() {
  // mul peab olema täpselt nii mitu tk kui paremal pool olev hook nõuab
  const [products, setProducts] = useState(productsFromFile);

  // loogelised tähistavad siin et ma saan valida mitu tk
  const { t } = useTranslation();

  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  }

  const sortPriceAscending = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }

  const sortPriceDecending = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }

  const addToCart = (product) => {
    cartFile.push(product);
    // toast.success(product.name + ' lisatud!');
  }

  return (
    <div>
      <div className='bold-heading'>{t('products')}</div><br />
      <Button onClick={() => sortAZ()}>{t('sort-az')}</Button>
      <Button onClick={() => sortZA()}>{t('sort-za')}</Button><div>  </div>
      <Button onClick={() => sortPriceAscending()}>{t('sort-price-increasing')}</Button>
      <Button onClick={() => sortPriceDecending()}>{t('sort-price-decreasing')}</Button>
      <br /><br />

      {products.map((product, index) =>
        <div key={index}>
          <img src={product.image} alt='' />
          <div>{product.name}</div>
          <div>{product.price}</div>
          <Button onClick={() => addToCart(product)}>{t('add-to-cart')}</Button>
          <Link to={'/product/' + index}>
            <Button>{t('product-details')}</Button>
          </Link>
          <br /><br />
        </div>
      )}
      {/* <ToastContainer
        position="bottom-center"
        autoClose={3000}
        transition={Slide}
      /> */}
    </div>
  )
}

export default HomePage