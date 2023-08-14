import React from 'react'
// import productsFromFile from '../../data/products.json'
// import cartFile from '../../data/cart.json' // relatiivne import
import { useEffect, useState } from 'react';
// import { Slide, ToastContainer, toast } from 'react-toastify';

import { useTranslation } from 'react-i18next';
import config from "../../data/config.json";
import SortButtons from '../../components/home/SortButtons';
import FilterButtons from '../../components/home/FilterButtons';
import Product from '../../components/home/Product';

function HomePage() {
  // mul peab olema täpselt nii mitu tk kui paremal pool olev hook nõuab
  const [products, setProducts] = useState([]); // väljakuvatav seis
  const [dbProducts, setDbProducts] = useState([]); // andmebaasiseis
  const [categories, setCategories] = useState([]);

  // loogelised tähistavad siin et ma saan valida mitu tk
  const { t } = useTranslation();

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(data => setCategories(data || []));

    fetch(config.productsUrl)
      .then(res => res.json())
      .then(data => {
        data = data.filter(product => product.active === true);
        setProducts(data || []); // siin hiljem teen veel setProducts ehk muudan products muutujat
        setDbProducts(data || []); // seda rohkem ei tee üle terve lehe
      });
  }, []);
  

  return (
    <div>
      <div className='bold-heading'>{t('products')}</div><br />
      <SortButtons 
          products={products}
          setProducts={setProducts}
      />
      <br /><br />
      <FilterButtons
        dbProducts={dbProducts}
        setProducts={setProducts}
        categories={categories}
      />

      <div>Kokku: {products.length} tk</div>

      {products.map((product, index) =>
        <Product product={product} key={index} />
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