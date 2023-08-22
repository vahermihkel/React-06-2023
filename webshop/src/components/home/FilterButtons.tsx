import { Category } from "../../models/Category";
import { Product } from "../../models/Product";

interface FilterButtonsInterface {
  dbProducts: Product[],
  setProducts: (value: Product[]) => void,
  categories: Category[]
}

function FilterButtons(props: FilterButtonsInterface) {

  // const filterByCategoryStickVacuum = () => {
  //   const result = productsFromFile.filter(product => product.category === "stick vacuum");
  //   setProducts(result);
  // }

  // const filterByCategoryRobotVacuum = () => {
  //   const result = productsFromFile.filter(product => product.category === "robot vacuum");
  //   setProducts(result);
  // }

  // const filterByCategoryEbay = () => {
  //   const result = productsFromFile.filter(product => product.category === "ebay");
  //   setProducts(result);
  // }

  // const filterByCategoryLed = () => {
  //   const result = productsFromFile.filter(product => product.category === "led");
  //   setProducts(result);
  // }

  // const filterByCategorySolar = () => {
  //   const result = productsFromFile.filter(product => product.category === "solar");
  //   setProducts(result);
  // }

  // products <--- väljanäidatav 1000toodet, 240toodet, 6toodet, 100toodet
  // setProducts <--- panen products sisse kõik tooted kellel on kategooria "solar"

  const filterByCategory = (categoryClicked: string) => {
    const result = props.dbProducts.filter(product => product.category === categoryClicked);
    props.setProducts(result);
  }

  return (
    <div>
       {/* <button onClick={() => filterByCategory("stick vacuum")}>stick vacuum</button>
      <button onClick={() => filterByCategory("robot vacuum")}>robot vacuum</button>
      <button onClick={() => filterByCategory("ebay")}>ebay</button>
      <button onClick={() => filterByCategory("led")}>led</button>
      <button onClick={() => filterByCategory("solar")}>solar</button> */}
      {props.categories.map(category => 
        <button key={category.name} onClick={() => filterByCategory(category.name)}>
          {category.name}
        </button>
      )}
    </div>
  )
}

export default FilterButtons