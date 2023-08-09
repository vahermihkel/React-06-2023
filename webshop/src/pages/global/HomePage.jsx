import React from 'react'
// import productsFromFile from '../../data/products.json'
// import cartFile from '../../data/cart.json' // relatiivne import
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
// import { Slide, ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import config from "../../data/config.json";
import SortButtons from '../../components/SortButtons';

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
        setProducts(data || []); // siin hiljem teen veel setProducts ehk muudan products muutujat
        setDbProducts(data || []); // seda rohkem ei tee üle terve lehe
      });
  }, []);

  const addToCart = (productClicked) => {
    // cartFile.push(product);
    const cart = JSON.parse(localStorage.getItem("cart") || "[]"); // localStoragest tuleb ALATI SÕNA
    const index = cart.findIndex(cartProduct => cartProduct.product.id === productClicked.id);
    //                .findIndex()    0 või suurem arv                -1
    //                .find()          {}                           undefined
    //                .filter()      .length on suurem kui 0      .length on 0
    if (index >= 0) { // index !== -1
      // KUI ON OSTUKORVIS, SIIS SUURENDAME KOGUST
      // cart[index] = {"quantity": cart[index].quantity+1, "product": productClicked}
      // cart[index].quantity = cart[index].quantity + 1;
      // cart[index].quantiy += 1;
      cart[index].quantity++;
    } else {
      cart.push({"quantity": 1, "product": productClicked});
    }
    localStorage.setItem("cart", JSON.stringify(cart)); // localStoragesse tuleb saata ALATI sõna
    // toast.success(product.name + ' lisatud!');

    // kui tahame salvestada ostukorvi localStoragesse, siis me ei tohi asendada uue tootega vana toodet
    // 1. võtame vanad väärtused  ---->   localStorage.getItem("VÕTI");
    // 2. võtame jutumärgid maha ----> JSON.parse()
    // 3. lisan vanadele väärtustele toote juurde ---->   VANAD.push(LISATAV_UUS)
    // 4. lisame jutumärgid tagasi -----> JSON.stringify()
    // 5. uue ostukorvi sisu tagasi lisama ---->   localStorage.setItem("VÕTI", UUENENUD_VÄÄRTUSED)
  }

  // const filterByCategoryStickVacuum = () => {
  //   const result = productsFromFile.filter(product => product.category === "stick vacuum");
  //   setProducts(result);
  // }

  // const filterByCategoryRobotVacuum = () => {
  //   const result = productsFromFile.filter(product => product.category === "robot vacuum");
  //   setProducts(result);
  // }

  // const filterByCategoryEbay = () => {
  //   const result = productsFromFile.filter(product => product.category === "ebay");
  //   setProducts(result);
  // }

  // const filterByCategoryLed = () => {
  //   const result = productsFromFile.filter(product => product.category === "led");
  //   setProducts(result);
  // }

  // const filterByCategorySolar = () => {
  //   const result = productsFromFile.filter(product => product.category === "solar");
  //   setProducts(result);
  // }

  // products <--- väljanäidatav 1000toodet, 240toodet, 6toodet, 100toodet
  // setProducts <--- panen products sisse kõik tooted kellel on kategooria "solar"

  const filterByCategory = (categoryClicked) => {
                  // !!!!
    const result = dbProducts.filter(product => product.category === categoryClicked);
    setProducts(result);
  }

  return (
    <div>
      <div className='bold-heading'>{t('products')}</div><br />
      <SortButtons 
          products={products}
          setProducts={setProducts}
      />
      <br /><br />
      {/* <button onClick={() => filterByCategory("stick vacuum")}>stick vacuum</button>
      <button onClick={() => filterByCategory("robot vacuum")}>robot vacuum</button>
      <button onClick={() => filterByCategory("ebay")}>ebay</button>
      <button onClick={() => filterByCategory("led")}>led</button>
      <button onClick={() => filterByCategory("solar")}>solar</button> */}
      {categories.map(category => 
        <button key={category.name} onClick={() => filterByCategory(category.name)}>
          {category.name}
        </button>
      )}

      <div>Kokku: {products.length} tk</div>

      {products.map((product, index) =>
        <div key={index}>
          <img src={product.image} alt='' />
          <div>{product.name}</div>
          <div>{product.price.toFixed(2)}</div>
          <Button onClick={() => addToCart(product)}>{t('add-to-cart')}</Button>
          <Link to={'/product/' + product.id}>
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