import React from 'react'
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


function SortButtons(props) {
  const { t } = useTranslation();

  const sortAZ = () => {
    props.products.sort((a, b) => a.name.localeCompare(b.name));
    props.setProducts(props.products.slice());
  }

  const sortZA = () => {
    props.products.sort((a, b) => b.name.localeCompare(a.name));
    props.setProducts(props.products.slice());
  }

  const sortPriceAscending = () => {
    props.products.sort((a, b) => a.price - b.price);
    props.setProducts(props.products.slice());
  }

  const sortPriceDecending = () => {
    props.products.sort((a, b) => b.price - a.price);
    props.setProducts(props.products.slice());
  }

  return (
    <div>
      <Button onClick={() => sortAZ()}>{t('sort-az')}</Button>
      <Button onClick={() => sortZA()}>{t('sort-za')}</Button><div>  </div>
      <Button onClick={() => sortPriceAscending()}>{t('sort-price-increasing')}</Button>
      <Button onClick={() => sortPriceDecending()}>{t('sort-price-decreasing')}</Button>
    </div>
  )
}

export default SortButtons