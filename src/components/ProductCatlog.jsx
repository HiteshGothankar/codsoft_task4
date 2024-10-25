import React from 'react'

const ProductCatlog = ({product,addToCart}) => {
  return (
    <div className='flex'>
      {
        product.map((productItem,productIndex)=>{
            return(
              
              <div key={productIndex} style={{width: '30%'}}>
                <div className='product-item'>
                  <img className="product-img" src={productItem.url} alt="" />

                  <div className='product-info'>
                  <p>{productItem.name} | {productItem.category} | </p>
                  <p>{productItem.seller}</p>
                  <p>Rs. {productItem.price} /-</p>
                  <button className='btn' onClick={() => addToCart(productItem)}>Add To Cart</button>
                  </div>
                  
                </div>
              </div>
            )
        })
      }
    </div>
  )
}

export default ProductCatlog
