import React from 'react'
import cart from '../assets/cart.png'


const Header = (props) => {
  return (
      <>
      <div className='flex nav'>
        <div onClick={() => props.handleShow(false)} className='bold'>E-BuyIT</div>
        <div onClick={() => props.handleShow(true)} className='cart'><img height={20} width={20} src={cart} alt="" />
            <sup className='cartcount'>{props.count}</sup>
        </div>
      </div>
      
      </>
  )
}

export default Header
