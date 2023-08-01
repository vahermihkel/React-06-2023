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

  const decreaseQuantity = (index) => {
    // cart[index].quantity = cart[index].quantity - 1;
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    // cart[index].quantity = cart[index].quantity + 1;
    cart[index].quantity++;
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
    cart.forEach(cartProduct => sum += cartProduct.product.price * cartProduct.quantity);
    return sum.toFixed(2);
  }
 
  return (
    <div>
      {cart.length === 0 && <div className='bold-heading'>{t('cart-is-empty')}</div>}
      {cart.length > 0 && <div className='bold-heading'>{t('products-in-cart')}: {cart.length}</div>}
      {cart.length > 0 && <Button variant='danger' onClick={emptyCart}>{t('empty-cart')}</Button>}<br /><br />
      {cart.map((cartProduct, index) =>
        <div key={index}>
          {cartProduct.product.name} (id: {cartProduct.product.id}) - {cartProduct.product.price.toFixed(2)}
          <br />
          <button onClick={() => decreaseQuantity(index)}>-</button>
          <span>{cartProduct.quantity} pcs</span>
          <button onClick={() => increaseQuantity(index)}>+</button>
          <div>{(cartProduct.product.price * cartProduct.quantity).toFixed(2)} €</div>
          <Button variant='danger' onClick={() => removeProduct(index)}>{t('remove')}</Button>
        </div>
      )}
      {cart.length > 0 &&  <div className='bold-heading' >{t('total-sum')}: {cartSum()} €</div> }
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        transition={Slide}
      />
    </div>
  )
}

export default Cart