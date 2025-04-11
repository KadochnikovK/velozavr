import React from 'react'
import img from '../../img/img1.png'

export default function OfferSection() {
  return (

    <div className='offer container'>
       <div  className='text-content'>
        <h2 className="headline">Что мы предлагаем</h2>
        <p className='paragraph paragraph--italic'>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
       </div>
       <img className='img' src={img}/>
    </div>

  )
}
