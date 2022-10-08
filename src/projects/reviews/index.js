import React, { useState }from 'react'
import reviews from './data'
import Review from './Review'
import "./review.css"


const Main = () => {

  return <main>
    <section className="container">
      <div className="title">
        <h2>our reviews</h2>
        <div className="underline"></div>
      </div>
      <Review/>
    </section>
  </main>
  
}

export default Main


//   const [index, setIndex] = useState(0)

//   const prev = () => {
//    if(index===0){
//      setIndex(reviews.length-1)
//    }else setIndex(index-1)
//   }

//   const next = () => {
//    if(index===reviews.length-1){
//      setIndex(0)
//    }else setIndex(index+1)

//   }
// return (
//   <>
//    <Review reviews={reviews} next={next} prev={prev} index={index}/>
//   </>
// )
// 