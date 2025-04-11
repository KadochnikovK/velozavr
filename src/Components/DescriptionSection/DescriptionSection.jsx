import React from 'react'
import din from '../../img/din.png'

export default function DescriptionSection() {
  return (
    <div className='description container'>
       <div  className='text-content'>
        <h1 className="main-headline">Веломастерская “Велозар”</h1>
        <p className='paragraph'>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
       </div>
       <img className='main-img' src={din}/>
    </div>
  )
}
