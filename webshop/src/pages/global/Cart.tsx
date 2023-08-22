import React, { useContext } from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
// import cartFromFile from '../../data/cart.json'
import { Slide, ToastContainer, toast } from 'react-toastify';
import styles from "../../css/Cart.module.css"; // <--- muutujana ehk moodulina, mõjub ainult siin failis
//                          peab olema .module.css
// import "../../css/Cart.css"; <---- globaalne, ei tohi olla .module.css

import { useTranslation } from 'react-i18next';
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';
import { CartSumContext } from '../../store/CartSumContext';
import { CartProduct } from '../../models/CartProduct';

function Cart() {

  const [cart, setCart] = useState<CartProduct[]>(JSON.parse(localStorage.getItem('cart') || '[]'));

  const { t } = useTranslation();

  const { setCartSum } = useContext(CartSumContext);

  const emptyCart = () => {
    cart.splice(0);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(cartSum());
    // setCartSum("0.00");
  }

  const decreaseQuantity = (index: number) => {
    // cart[index].quantity = cart[index].quantity - 1;
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(cartSum());
  }

  const increaseQuantity = (index: number) => {
    // cart[index].quantity = cart[index].quantity + 1;
    cart[index].quantity++;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(cartSum());
  }

  const removeProduct = (index: number) => {
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
      {cart.length === 0 && <div className={styles.bold__heading}>{t('cart-is-empty')}</div>}
      {cart.length > 0 && <div className={styles.bold__heading}>{t('products-in-cart')}: {cart.length}</div>}
      {cart.length > 0 && <Button variant='danger' onClick={emptyCart}>{t('empty-cart')}</Button>}<br /><br />
      {cart.map((cartProduct, index) =>
        <div key={index} className={styles.product}>
          <img className={styles.image} src={cartProduct.product.image} alt="" />
          <div className={styles.name}>{cartProduct.product.name}</div>
          <div className={styles.price}>{cartProduct.product.price.toFixed(2)}</div>
          <div className={styles.quantity}>
            <img className={styles.button} onClick={() => decreaseQuantity(index)} src="/minus.png" alt="" />
            <span>{cartProduct.quantity} pcs</span>
            <img className={styles.button} onClick={() => increaseQuantity(index)} src="/plus.png" alt="" />
          </div>
          <div className={styles.sum}>{(cartProduct.product.price * cartProduct.quantity).toFixed(2)} €</div>
          <img className={styles.button} onClick={() => removeProduct(index)} src="remove.png" alt="" />
        </div>
      )}
      {cart.length > 0 &&  
        <div>
          <div className={styles.bold__heading}>{t('total-sum')}: {cartSum()} €</div>
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