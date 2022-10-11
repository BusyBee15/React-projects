import React, { useState } from 'react'
import List from './List'
import data from './data'
import "./birthday reminder.css"

const Main = () => {
  const [value, setValue] = useState(data)
  return (
    <main>
    <section className="container">
      <h3>{value.length} birthdays today</h3>
      <List people={value}/>
      <button className='btn' onClick={()=>setValue([])}>Clear all</button>
    </section>
   </main>
  )
}

export default Main