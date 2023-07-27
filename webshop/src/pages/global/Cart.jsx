import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
// import cartFromFile from '../../data/cart.json'
import { Slide, ToastContainer, toast } from 'react-toastify';

import { useTranslation } from 'react-i18next';

function Cart() {

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));

  const { t } = useTranslation();

  const emptyCart = () => {
    cart.splice(0);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const removeProduct = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice());
    toast.success(t('product-removed'));
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const cartSum = () => {
    let sum = 0;
    cart.forEach(product => sum += product.price);
    return sum.toFixed(2);
  }
 
  return (
    <div>
      {cart.length === 0 && <div className='bold-heading'>{t('cart-is-empty')}</div>}
      {cart.length > 0 && <div className='bold-heading'>{t('products-in-cart')}: {cart.length}</div>}
      {cart.length > 0 &&  <div className='bold-heading' >{t('total-sum')}: {cartSum()} €</div> }
      {cart.length > 0 && <Button variant='danger' onClick={emptyCart}>{t('empty-cart')}</Button>}<br /><br />
      {cart.map((product, index) =>
        <div key={index}>
          {product.name} (id: {product.id}) - {product.price}
          <Button variant='danger' onClick={() => removeProduct(index)}>{t('remove')}</Button>
        </div>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        transition={Slide}
      />
    </div>
  )
}

export default Cart