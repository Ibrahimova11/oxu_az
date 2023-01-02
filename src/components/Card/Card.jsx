import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Card.css'
function Card() {

  const [card, setCard] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=>setCard(res.data))
  }, [])

  return (
    <>
    {card.map((kart)=>{
     return( <div class="card">
     <div class="card__header">
       <img src={`${kart.url}`} alt="" />
     </div>
     <div class="card__content">
       <div class="title">{kart.title}</div>
     </div>
   </div>)
    })}
      
    </>
  )
}

export default Card