import React,{useState} from 'react'
import './Menu.scss'
import Card from './Card'
import Switch from './Switch'
import Data from './Data'
import Product from './Product'
const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("Buff")
  const handelclick = item =>{
      setSelectedCategory(item)
    }
  function filteredData(Data,selected){
      let filtereddata = Data;
      if(selected){
        filtereddata = filtereddata.filter(
          ({category}) =>
            category === selected
        );
      }
      return filtereddata.map(({img, title, reviews, newPrice, prevPrice}) => (
        <Card
        key={Math.random()}
        img={img}
        title={title}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
        />
      ));
    }
  
    const result = filteredData(Data, selectedCategory);

  return (
    <>
         <div className="recipes_wrapper">
        <div className="title_text_wrapper">
          <h1>
            Our <span>Most Popular</span> Recipes
          </h1>
          <p>
            Browse through a varieties of recipes with fresh ingredients
            selected only from best places
          </p>
        </div>
        <div className="switch_wrapper">
            <Switch handelclick={handelclick}/>
        </div>
        <div className="momo_image_wrapper">
        <Product result={result}/>
        </div>
        <button>Explore Our Menu →</button>
      </div>
    </>
  );
};

export default Menu
