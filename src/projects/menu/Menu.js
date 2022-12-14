import React from 'react'

const Menu = ({items}) => {
  return (
     <div className='section-center'>
      {/* <img src={require("./images/item-1.jpeg")} alt="" /> */}
        {
            // console.log(items)
            items.map((menuItem)=>{
                const {id, title, img, desc, price} = menuItem
                console.log(typeof img)
                return <article key={id} className="menu-item">
                    <img src={require(`${img}`)} alt={title} className="photo"/>
                    <div className="item-info">
                        <header>
                            <h4>{title}</h4>
                            <h4 className='price'>{price}</h4>
                        </header>
                        <p className='item-text'>{desc}</p>
                    </div>
                </article>
            })
        }
     </div>
  )
}

export default Menu