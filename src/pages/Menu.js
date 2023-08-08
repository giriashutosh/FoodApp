import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from '../components/Shimmer/Shimmer';
import MenuCard from '../components/MenuCard/MenuCard';
import ItemList from '../components/ItemList/ItemList';
import CategoryTitle from '../components/CategoryTitle/CategoryTitle';

const Menu = () => {
  const resId = useParams();
  const [menu, setMenu] = useState(null)
  const [categoryTitle, setCategoryTitle] = useState("Recommended");

  const fetchMenuData = async () => {
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6691565&lng=77.45375779999999&restaurantId=${resId.id}&catalog_qa=undefined&submitAction=ENTER`)
    const json = await response.json();
    // console.log(response)
    console.log(json);
    setMenu(json)
    //console.log(menu)
  }

  useEffect(() => {
    fetchMenuData();
    
  }, [])

  if (menu === null) return <Shimmer />
  const name = menu.data.cards[0].card.card.info.name;
  const cuisines = menu.data.cards[0].card.card.info.cuisines;
  const areaName = menu.data.cards[0].card.card.info.areaName;
  const price = menu.data.cards[0].card.card.info.costForTwoMessage;
  const image = menu.data.cards[0].card.card.info.cloudinaryImageId;

  const categories = menu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(categories)

  return (
    <div className='flex flex-col '>
      <MenuCard title={name} price={price} areaName={areaName} image={image} cuisines={cuisines} />
      <div className='flex flex-wrap'>
        {
          categories.map((category) => <CategoryTitle key={category.card.card.title} data={ category.card.card} category={categoryTitle} setCategory={ setCategoryTitle}/>)
        }
      </div>
      <div className='flex'>
       {
        categories.map((category)=>
          <ItemList id={category.card.card.title} data={category.card.card}  category={categoryTitle} setCategory={ setCategoryTitle}/>)
      }
      </div>
      
      
    </div>
  )
}

export default Menu
