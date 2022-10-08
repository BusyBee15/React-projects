import React, { useState } from 'react'
import items from './data'
import Menu from './Menu'
import Categories from './Categories'
import './menu.css'

const allcategories = ["all", ...new Set(items.map((item)=>item.category))]

const Main = () => {

  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allcategories)

  const filterItems = (category) => {
    if(category==="all"){
      setMenuItems(items)
    }else{
      const filteredItems = items.filter((item)=>item.category===category)
      setMenuItems(filteredItems)
    }
  }

  return (
    <main>
        <section className='menu section'>
            <div className='title'>
                <h2>our menu</h2>
                <div className='underline'></div>
                {/* <img src={require("./images/item-1.jpeg")} alt="" /> */}
            </div>
           
            <Categories categoryList={categories} handler={filterItems}/>
            <Menu items={menuItems}/>
        </section>
    </main>
  )
}

export default Main