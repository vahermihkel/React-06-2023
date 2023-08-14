import React, { useEffect, useRef, useState } from "react";
// import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import config from "../../data/config.json";

function AddProduct() {
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const {t} = useTranslation();
  const toastMessageSuccess = t("product-added");
  // const toastMessageFail = t("product-not-added");
  const [idUnique, setIdUnique] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(data => setCategories(data || []));

    fetch(config.productsUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data || []);
        // setLoading(false);
      });
  }, []);

  const addNew = () => {
    if (nameRef.current.value === "") {
      toast.error("Tühja nimetusega ei saa toodet lisada!");
      return;
    } 
    
    if (priceRef.current.value < 0) {
      toast.error("Negatiivse hinnaga ei saa toodet lisada!");
      return;
    } 

    if (imageRef.current.value.includes(" ")) {
      toast.error("Pildi URLs ei tohi tühikut olla!");
      return;
    } 
    
    products.push({
      id: Number(idRef.current.value),
      image: imageRef.current.value,
      name: nameRef.current.value,
      price: Number(priceRef.current.value),
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      active: activeRef.current.checked,
    });
    
    fetch(config.productsUrl, {method: "PUT", body: JSON.stringify(products)})
      .then(() => toast.success(toastMessageSuccess));
  };

  const checkIdUniqueness = () => {
    const result = products.filter(product => product.id === Number(idRef.current.value));
    if (result.length === 0) {
        // KELLELGI EI OLE SELLIST ID'd
        setIdUnique(true);
    } else {
        // KELLELEGI JUBA ON OLEMAS SELLINE ID
        setIdUnique(false);
    }
  }

  return (
    <div>
      {idUnique === false && <div>Sisestatud ID ei ole unikaalne!</div>}
      <br />
      <label>{t("id")}</label> <br />
      <input onChange={checkIdUniqueness} ref={idRef} type="number" /> <br /> <br />
      <label>{t("name")}</label> <br />
      <input ref={nameRef} type="text" /> <br /> <br />
      <label>{t("price")}</label> <br />
      <input ref={priceRef} type="number" /> <br /> <br />
      <label>{t("image")}</label> <br />
      <input ref={imageRef} type="text" /> <br /><br />
      <label>{t("category")}</label> <br />
      {/* <input ref={categoryRef} type="text" /> <br /> <br /> */}
      <select ref={categoryRef}>
        {categories.map(category => <option key={category.name}>{category.name}</option>)}
      </select> <br />
      <label>{t("description")}</label> <br />
      <input ref={descriptionRef} type="text" /> <br /><br />
      <label>{t("active")}</label> 
      <input ref={activeRef} type="checkbox" /> <br /><br />
      
      <Button disabled={idUnique === false} onClick={addNew} variant="success">{t("add")} </Button>
      <ToastContainer position="bottom-right" autoClose={4000} theme="dark" />
    </div>
  );
}

export default AddProduct;