import React, { useContext } from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
// import cartFromFile from '../../data/cart.json'
import { Slide, ToastContainer, toast } from 'react-toastify';
import "../../css/Cart.css";

import { useTranslation } from 'react-i18next';
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';
import { CartSumContext } from '../../store/CartSumContext';

function Cart() {

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));

  const { t } = useTranslation();

  const { setCartSum } = useContext(CartSumContext);

  const emptyCart = () => {
    cart.splice(0);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(cartSum());
    // setCartSum("0.00");
  }

  const decreaseQuantity = (index) => {
    // cart[index].quantity = cart[index].quantity - 1;
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(cartSum());
  }

  const increaseQuantity = (index) => {
    // cart[index].quantity = cart[index].quantity + 1;
    cart[index].quantity++;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(cartSum());
  }

  const removeProduct = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice());
    toast.success(t('product-removed'));
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(cartSum());
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
        <div key={index} className="product">
          <img className="image" src={cartProduct.product.image} alt="" />
          <div className="name">{cartProduct.product.name}</div>
          <div className="price">{cartProduct.product.price.toFixed(2)}</div>
          <div className="quantity">
            <img className="button" onClick={() => decreaseQuantity(index)} src="/minus.png" alt="" />
            <span>{cartProduct.quantity} pcs</span>
            <img className="button" onClick={() => increaseQuantity(index)} src="/plus.png" alt="" />
          </div>
          <div className="sum">{(cartProduct.product.price * cartProduct.quantity).toFixed(2)} €</div>
          <img className="button" onClick={() => removeProduct(index)} src="remove.png" alt="" />
        </div>
      )}
      {cart.length > 0 &&  
        <div>
          <div className='bold-heading' >{t('total-sum')}: {cartSum()} €</div>
          <ParcelMachines />
          <Payment sum={cartSum()} />
        </div> }
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        transition={Slide}
      />
    </div>
  )
}

export default Cart