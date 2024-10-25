import React, { useEffect, useState } from 'react'

const CartList = ({cart}) => {


const [CART, setCART] = useState([])

useEffect(() => {
  setCART(cart)
},[cart])

  return (
    <>
    <div>

    <div className='addedcart'>
      {
        CART.map((cartItem, cartindex)=>{
            return(
                <div className='indvcart' key={cartindex}>
                    <img className='cartimg' src={cartItem.url} alt="" />
                    <span className='indvpro'> {cartItem.name} </span>
                    <button className='plusminusbtn'
                      onClick={() => {
                      const _CART = CART.map((item,index) => {
                        return cartindex === index ? { ...item, quantity : item.quantity > 0 ? item.quantity - 1 : 0} : item
                      })
                    
                      setCART(_CART)
                    }}
                    > - </button>

                    <span className='indvpro'> {cartItem.quantity} </span>

                    <button className='plusminusbtn'
                      onClick={() => {
                      const _CART = CART.map((item,index) => {
                        return cartindex === index ? { ...item, quantity : item.quantity + 1} : item
                      })
                      setCART(_CART)
                    }}
                    > + </button>
                    <span className='indvpro'> Rs.{cartItem.price * cartItem.quantity} </span>
                </div>
            )
        })
      }

      <p className='totalprice'> Total Rs.
        {
            CART.map(item => item.price * item.quantity).reduce((total, value) => total + value,0)
        }
      </p>
    </div>
    </div>

    </>

  )
}

export default CartList
