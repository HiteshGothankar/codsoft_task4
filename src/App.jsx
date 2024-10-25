import Header from './components/Header'
import './App.css'
import ProductCatlog from './components/ProductCatlog'
import { useState } from 'react'
import CartList from './components/CartList'
function App() {

const [product, setProduct] = useState([
  {
    url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQk9324J9EiLzpcdbMzFdVYCavn9kC_Hfj1SdUOCuAM7JeUwuMhYPHLyf1BhZATtJtx-yPc03Tlw8fw9zrSFJ6GKrz2o7waKstbnTeFHMtPcLeTyQONIjENCg",
    name : "RedTape Sneaker causual shoes",
    category: "shoes",
    seller: "SoftCushion Insole",
    price: 2000
  },
  
  {
    url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOapVK8stLPp4T1NhsRqvJC3bFxoAshXc1Q&s",
    name : "Cushioning running shoes",
    category: "shoes",
    seller: "Bacca Bucci",
    price: 1500
  },
  
  {
    url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcVQb5LRCOKbzj7gLXhfa-MhvmR9lT-r2hw&s",
    name : "Basketball shoes",
    category: "shoes",
    seller: "Come4Buy",
    price: 3000
  },
  
  {
    url : "https://assets.ajio.com/medias/sys_master/root/20230921/meKx/650c4c2bddf7791519efcd10/-473Wx593H-466612236-black-MODEL.jpg",
    name : "SkyLona Chronograph Watch",
    category: "watches",
    seller: "SkyLona",
    price: 500
  },
  
  {
    url : "https://img.tatacliq.com/images/i16//437Wx649H/MP000000016504109_437Wx649H_202403181810431.jpeg",
    name : "Titan Premium analog watch",
    category: "watches",
    seller: "Titan",
    price: 1500
  },
  
  {
    url : "https://images-cdn.ubuy.co.in/651f4f8f8c710b2651510d07-sanda-739-sports-men-39-s-watches.jpg",
    name : "Sanda Premium sports watch",
    category: "watches",
    seller: "UBuy",
    price: 1200
  },
  
  {
    url : "https://cdn1.smartprix.com/rx-iygaGCROu-w1200-h1200/ygaGCROu.jpg",
    name : "Realme 12X(6GB+128GB)",
    category: "smartphones",
    seller: "smartprix",
    price: 18000
  },
  
  {
    url : "https://cdn1.smartprix.com/rx-i9D1kFitS-w1200-h1200/9D1kFitS.jpg",
    name : "iQOO Z7s 5G",
    category: "smartphones",
    seller: "smartprix",
    price: 20000
  },
  
  {
    url : "https://d2xamzlzrdbdbn.cloudfront.net/products/d062f001-05a7-4916-925d-d5176b8ed31c22190719_416x416.jpg",
    name : "Vivo T1 5G",
    category: "smartphones",
    seller: "starlight",
    price: 19000
  },

  {
    url : "https://computechstore.in/wp-content/uploads/2023/12/HP-Laptop-15-1-e1703827227942.jpg",
    name : "HP pavilion Intel Core i5",
    category: "laptops",
    seller: "starlight",
    price: 27000
  },
  
  {
    url : "https://5.imimg.com/data5/QN/CQ/FZ/SELLER-18983365/hp-15-intel-core-i5-full-hd-laptop.jpg",
    name : "HP 15 Intel Core i5",
    category: "laptops",
    seller: "quickbuy",
    price: 21000
  },
  
  {
    url : "https://p1-ofp.static.pub//medias/25682325308_21JN21JQX_202303130232241699937710738.png",
    name : "lenovo ideapad 1i 14 FullHD",
    category: "laptops",
    seller: "Best4U",
    price: 30000
  }
  
])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)


  const addToCart = (data) =>{
    setCart([...cart, { ...data , quantity: 1}])
  }

  const handleShow = (value) =>{
    setShowCart(value)
  }

  return (
    <>
      <Header count={cart.length} handleShow={handleShow}/>
      {
        showCart ? <CartList cart={cart}/> : <ProductCatlog product={product} addToCart={addToCart}/>
      }
    </>
  )
}

export default App
