import React, { useEffect, useRef, useState } from 'react'
import config from "../../data/config.json";
import { Category } from '../../models/Category';

function MaintainCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const categoryRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(data => setCategories(data || [])) // null || [] , kui tuleb null, võtab parema poole ehk tühja array
  }, []);

  const addCategory = (event: any) => {
    if (event.code !== "Enter" && event.type !== "click") {
      return;
    }
    if (!categoryRef.current) {
      return
    }
    categories.push({"name": categoryRef.current.value});
    setCategories(categories.slice());
    fetch(config.categoryUrl, {
      method: "PUT",
      body: JSON.stringify(categories)
    } );
    categoryRef.current.value = "";
  }

  const deleteCategory = (index: number) => {
    categories.splice(index,1);
    setCategories(categories.slice());
    fetch(config.categoryUrl, {
      method: "PUT",
      body: JSON.stringify(categories)
    } );
  }

  return (
    <div>
      <label>Kategooria nimi</label> <br />
      <input onKeyUp={addCategory} ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory}>Lisa</button> <br />
      {categories.map((category, index) => 
        <div key={index}>
          {category.name} 
          <button onClick={() => deleteCategory(index)}>x</button> 
        </div>)}
    </div>
  )
}

export default MaintainCategories