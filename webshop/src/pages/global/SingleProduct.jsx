import React from 'react'
import productsFromFile from "../../data/products.json";
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleProduct() {
  const {productId} = useParams(); // App.js  path="/product/:productId" element={<SingleProduct/>}
  const found = productsFromFile.find(product => product.id === Number(productId));
  const {t} = useTranslation();

  if(found === undefined) {
    return <div>{t("product-not-found")}</div>
  }

  return (
    <div>
     
        <div key ={found.id}>
          <img src={found.image} alt="" />
          <div>{t("id")}: {found.id}</div>
          <div>{t("name")}: {found.name}</div>
          <div>{t("price")}: {found.price} €</div>
          <div>{t("category")}: {found.category}</div>
          <div>{t("description")}: {found.description}</div>
          <div>{found.active}</div>
        </div> 
       
        <br />
        <Button as={Link} to= "/">{t("back")}</Button>

    </div> 
  )
}

export default SingleProduct