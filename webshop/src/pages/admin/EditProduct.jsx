import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json"

function EditProduct() {
  // productId <-- peab olema TÄPSELT samamoodi kirjutatud nagu app.js failist URLis :kooloni järel
  const { productId } = useParams();
  // const { productId, productCategory } = useSearchParams();
   // localhost:3000/admin/edit-product?productId=312312&productCategory=kategooria
  // .find()   <--  teeb tsükli, otsib kõikide toodete seast ja leiab õige toote üles tema omaduse järgi
  // .find() leiab alati kõige esimese toote kellele tingimus klapib
  const found = productsFromFile.find(product => product.id === Number(productId));
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();

  const edit = () => {
    const index = productsFromFile.findIndex(product => product.id === Number(productId));
    productsFromFile[index] = {};
  }

  if (found === undefined) { // returniga leht lõppeb
    return <div>Toodet ei leitud</div> 
  }

  return (
    <div>
      <label>ID</label> <br />
      <input defaultValue={found.id} ref={idRef} type="number" /> <br />
      <label>Name</label> <br />
      <input defaultValue={found.name} ref={nameRef} type="text" /> <br />
      <label>Price</label> <br />
      <input defaultValue={found.price} ref={priceRef} type="number" /> <br />
      <label>Image</label> <br />
      <input defaultValue={found.image} ref={imageRef} type="text" /> <br />
      <label>Category</label> <br />
      <input defaultValue={found.category} ref={categoryRef} type="text" /> <br />
      <label>Description</label> <br />
      <input defaultValue={found.description} ref={descriptionRef} type="text" /> <br />
      <label>Active</label> <br />
      <input defaultChecked={found.active} ref={activeRef} type="checkbox" /> <br />
      <button onClick={edit}>Muuda</button>
    </div>
  )
}

export default EditProduct