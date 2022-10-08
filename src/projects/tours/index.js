import React, { useEffect, useState } from 'react'
import Loading from "./Loading"
import Tours from './Tours'
import "./tours.css"

const url = "https://course-api.com/react-tours-project"
const Main = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTourList = tours.filter((tour)=>tour.id!=id)
    setTours(newTourList)
  }

  const fetchTours = async () => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);
    setTours(data)
    setLoading(false)

  }

  useEffect(()=>{
    fetchTours()
  },[])
  
  if(loading){
    return (
      <main>
        <Loading/>
      </main>
    )
  }

  if(tours.length==0){
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button onClick={fetchTours} className="btn">refresh</button>
      </div>
    </main>
  }
  
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )

}

export default Main