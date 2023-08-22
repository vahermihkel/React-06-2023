// import productsFromFile from '../../data/products.json'
import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import config from "../../data/config.json";
import styles from "../../css/MaintainProducts.module.css";
import { Product } from '../../models/Product';

function MaintainProducts() {

  // const [products, setProducts] = useState(productsFromFile);
  const [products, setProducts] = useState<Product[]>([]); // väljakuvatav seis
  const [dbProducts, setDbProducts] = useState<Product[]>([]); // andmebaasiseis

  const { t } = useTranslation();
  const searchedRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // fetch(config.categoryUrl)
    //   .then(res => res.json())
    //   .then(data => setCategories(data || []));

    fetch(config.productsUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data || []); // siin hiljem teen veel setProducts ehk muudan products muutujat
        setDbProducts(data || []); // seda rohkem ei tee üle terve lehe
      });
  }, []);

  const deleteProduct = (productId: number) => {
    const index = dbProducts.findIndex(product => product.id === productId);
    dbProducts.splice(index, 1);
    // setProducts(dbProducts.slice());
    searchFromProducts();
    fetch(config.productsUrl, {method: "PUT", body: JSON.stringify(dbProducts)});
  }

  const searchFromProducts = () => {
    const searchedInput = searchedRef.current;
    if (!searchedInput) {
      return;
    }
    const result = dbProducts.filter(product => 
      product.name.toLowerCase().includes(searchedInput.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchedInput.value.toLowerCase()) || 
      product.id.toString().includes(searchedInput.value)
      );
    setProducts(result);
  } // HILJEM ID järgi otsimise

// localhost:3000/admin/maintain-products/admin/edit-product     to="admin/edit-product"
// localhost:3000/admin/edit-product                             to="/admin/edit-product"
  return (
    <div>
      <div className='bold-heading'>{t('maintain-products')}</div><br />
      <input ref={searchedRef} onChange={searchFromProducts} type="text" />
      <div>Kokku: {products.length} tk</div>
      {products.map((product) =>
        <div className={product.active === true ? styles.active : styles.inactive} key={product.id}>
          <img src={product.image} alt='' />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <Button onClick={() => deleteProduct(product.id)}>Kustuta</Button><br /><br />
          <Button as={Link as any} to={"/admin/edit-product/" + product.id}>Muuda</Button>
        </div>
      )}

    </div>
  )
}


export default MaintainProducts