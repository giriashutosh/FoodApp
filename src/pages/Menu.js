import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from '../components/Shimmer/Shimmer';

const Menu = () => {
    const resId  = useParams();
    const [menu, setMenu] = useState(null)

    const fetchMenuData = async() => {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6691565&lng=77.45375779999999&restaurantId=${resId.id}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await response.json();
        console.log(response)
        console.log(json);
        setMenu(json)
    }

    useEffect(() => {
        fetchMenuData();
    }, [])
    
   if(menu === null) return <Shimmer/>
    const name = menu.data.cards[0].card.card.info.name;
    const cuisines = menu.data.cards[0].card.card.info.cuisines;
    const areaName = menu.data.cards[0].card.card.info.areaName;
  return (
    <div className='menu-container'>
          <h1> { name}</h1>
          <p> {cuisines.join(", ")}</p>
          <p> {areaName}</p>
    </div>
  )
}

export default Menu
