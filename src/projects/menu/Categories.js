import React from 'react'

const Categories = ({categoryList , handler}) => {
  return (
    <div className="btn-container">
        {
            categoryList.map((category, index)=>{
                return <button className="filter-btn" key={index} onClick={()=>handler(category)}>{category}</button>
            })
        }
    </div>
  )
}

export default Categories