import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { CartSumContext } from '../../store/CartSumContext';

      // object destructuring (props asemel)
function Product({product}) {
  const { t } = useTranslation();
  const { setCartSum } = useContext(CartSumContext);

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
    let sum = 0;
    cart.forEach(cartProduct => sum += cartProduct.product.price * cartProduct.quantity);
    setCartSum(sum.toFixed(2));
    localStorage.setItem("cart", JSON.stringify(cart)); // localStoragesse tuleb saata ALATI sõna
    // toast.success(product.name + ' lisatud!');

    // kui tahame salvestada ostukorvi localStoragesse, siis me ei tohi asendada uue tootega vana toodet
    // 1. võtame vanad väärtused  ---->   localStorage.getItem("VÕTI");
    // 2. võtame jutumärgid maha ----> JSON.parse()
    // 3. lisan vanadele väärtustele toote juurde ---->   VANAD.push(LISATAV_UUS)
    // 4. lisame jutumärgid tagasi -----> JSON.stringify()
    // 5. uue ostukorvi sisu tagasi lisama ---->   localStorage.setItem("VÕTI", UUENENUD_VÄÄRTUSED)
  }

  return (
    <div>
      <img src={product.image} alt='' />
      <div>{product.name}</div>
      <div>{product.price.toFixed(2)}</div>
      <Button onClick={() => addToCart(product)}>{t('add-to-cart')}</Button>
      <Link to={'/product/' + product.id}>
        <Button>{t('product-details')}</Button>
      </Link>
      <br /><br />
    </div>
  )
}

export default Product