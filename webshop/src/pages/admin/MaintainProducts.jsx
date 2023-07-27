import productsFromFile from '../../data/products.json'
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


function MaintainProducts() {

  const [products, setProducts] = useState(productsFromFile);

  const { t } = useTranslation();
  const searchedRef = useRef();

  const deleteProduct = (index) => {
    // const index = productsFromFile.findIndex(product => product.id === productId);
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
  }

  const searchFromProducts = () => {
    const result = productsFromFile.filter(product => 
      product.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result);
  } // HILJEM ID järgi otsimise

// localhost:3000/admin/maintain-products/admin/edit-product     to="admin/edit-product"
// localhost:3000/admin/edit-product                             to="/admin/edit-product"
  return (
    <div>
      <div className='bold-heading'>{t('maintain-products')}</div><br />
      <input ref={searchedRef} onChange={searchFromProducts} type="text" />
      <div>Kokku: {products.length} tk</div>
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