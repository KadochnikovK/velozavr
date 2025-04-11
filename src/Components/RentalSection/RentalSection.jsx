import React from 'react'
import img from '../../img/img2.png'

export default function RentalSection() {
  return (
    <div className='rental container'>
       <div  className='text-content'>
        <h2 className="headline">Прокат велосипедов</h2>
        <p className='paragraph paragraph--italic'>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </p>
       </div>
       <img className='img' src={img}/>
    </div>
  )
}
