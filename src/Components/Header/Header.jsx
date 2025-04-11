import React from 'react'
import logo from '../../img/logo.png'

export default function Header() {
  return (
    <div className='header container'>
        <a href="#" className='link'><img src={logo} alt="logo" /></a>
        <nav className='menu'>
            <ul className='menu__list'>
                <li className='menu__item menu__item--active'><a href="#" className='link'>О нас</a></li>
                <li className='menu__item'><a href="#" className='link'>Услуги</a></li>
                <li className='menu__item'><a href="#" className='link'>Аренда</a></li>
            </ul>
        </nav>
        <a href="#" className='link link--button'>Связаться</a>

    </div>
  )
}
