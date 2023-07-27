import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
  const navigate = useNavigate(); 
  // 1. use eesliidesega 2. alati impordin 3. sulud lõpus 4. ei tohi funktsiooni sees 5. ei tohi olla dünaamika
  // hook - Reacti erikood
  const [idUnique, setIdUnique] = useState(true);

  const edit = () => {                          //      76139657   ===    "76139657"
    const index = productsFromFile.findIndex(product => product.id === Number(productId));
    productsFromFile[index] = {
      "id": Number(idRef.current.value), // "76139657" ---> 76139657
      "image": imageRef.current.value,
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.checked // .value ---> "on"   .checked ---> true / false
    };
    navigate("/admin/maintain-products");
  }

  // 100 inimest
  // 3 DISAINERIT
  // TESTIJA - kes peab rakenduse üle käima ja kõik vead üles leidma
  // ARENDAJA - koodi 50tk
  // TIIMIJUHT - koordineerib
  // ANALÜÜTIK - hinnapakkumised

  // 10inimest
  // 5 arendajat
  // 2 testijat
  // 2 tiimijuht+analüütik
  // 1 disainer

  // 3.8 miljonit on max hind
  // 60 eurot tunnis
  // sisselogimist ja autentimist - 300 000 
  // 250 000 eur - Nortal

  const checkIdUniqueness = () => {
    if (idRef.current.value === productId) { // sisestatud võrdub sellega mis on URL-s
      setIdUnique(true); // ID korras
      return; // <---- return katkestab ka funktsiooni edasimineku
    }
    const result = productsFromFile.filter(product => product.id === Number(idRef.current.value));
    if (result.length === 0) {
        // KELLELGI EI OLE SELLIST ID'd
        setIdUnique(true);
    } else {
        // KELLELEGI JUBA ON OLEMAS SELLINE ID
        setIdUnique(false);
    }
  }

  if (found === undefined) { // returniga leht lõppeb
    return <div>Toodet ei leitud</div> 
  }

  return (
    <div>
      {idUnique === false && <div>Sisestatud ID ei ole unikaalne!</div>}
      <label>ID</label> <br />
      <input onChange={checkIdUniqueness} defaultValue={found.id} ref={idRef} type="number" /> <br />
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
      <button disabled={idUnique === false} onClick={edit}>Muuda</button>
    </div>
  )
}

export default EditProduct