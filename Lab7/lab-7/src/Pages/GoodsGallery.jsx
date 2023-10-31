import React from 'react'
import { Link } from 'react-router-dom'
import GoodCard from '../Components/GoodCard';

// lab-7\src\assets\images\banana.jpg
function GetProducts(){
  return [
    { name: 'Banana 1kg', price: 1.99, image: 'https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg' },
    { name: 'Apple 1kg', price: 1.29, image: 'https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg' },
    { name: 'Orange 1kg', price: 2.49, image: 'https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg' },
    { name: 'Cool black hat', price: 19.99,  image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png' },
    { name: 'Peanuts 1kg', price: 6.99, image: 'https://content2.rozetka.com.ua/goods/images/big/321296211.jpg' },
    { name: 'Frozen bilberry 1 kg', price: 8.99, image: 'https://hoppydaysbrewingsupplies.com.au/wp/wp-content/uploads/brewing-supplies-4/frozen_blueberries_recipes.jpg' },
  ];
}

function GoodsGallery(){
  const products = GetProducts();
  return (
    <>
    <Link to="/">Go to lab 4 remake</Link >
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((product, index) => (
        <GoodCard key={index} name={product.name} price={product.price} image={product.image} />
      ))}
    </div>
    </>
  )
}

export default GoodsGallery