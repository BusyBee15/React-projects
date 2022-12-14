import React, { useState } from 'react'
import people from './data'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'
import reviews from './data'

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  const nextPerson = () => {
    setIndex((index)=>{
        if(index===people.length-1) return 0
        return index+1
    })
  }
  const prevPerson = () => {
    setIndex((index)=>{
       if(index===0) return people.length-1
       return index-1
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random()*people.length)
    setIndex(randomNumber)
  }

  return (
   <article className='review'>
  <div className="img-container">
    <img src={image} alt={name} className="person-img"/>
    <span className='quote-icon'>
        <FaQuoteRight/>
    </span>
  </div>
  <h4 className='author'>{name}</h4>
  <p className='job'>{job}</p>
  <p className="info">{text}</p>
  <div className="button-container">
    <button className="prev-btn" onClick={prevPerson }>
        <FaChevronLeft/>
    </button>
    <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight/>
    </button>
    
  </div>
  <button className="random-btn" onClick={randomPerson}>
        surprise me
    </button>
   </article>
  )
}

export default Review
// const Review = ({reviews, index, next, prev}) => {
 
//   return (
//    <article>
//     <h1>{reviews[index].name}</h1>
//     <h2>{reviews[index].job}</h2>
//     <img src={reviews[index].image} alt="" width="200px"/>
//     <p>{reviews[index].text}</p>
//     <button onClick={prev}>prev</button>
//     <button onClick={next}>next</button>
    
//    </article>
//   )
// }