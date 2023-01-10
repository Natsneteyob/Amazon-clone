import React from "react";
import "./Product.css";
import { useStateValue } from "./Stateprovider";


function Product({ id, title, Product, image, price, rating }) {
  const [{basket}, dispatch]= useStateValue();
   //basket is an array here
   //console.log("this is the basket" , basket)
  const addToBasket = () => {
 dispatch ({
  type: "ADD_TO_BASKET",
  item: {
    id: id,
    Product: Product,
    title: title,
    image: image,
    price: price,
    rating: rating,
  },
 });
  }
  return (
    <div className="product">
      <div className="product__info">
        <h3 className="Pro">{Product}</h3>
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            // rating ,is number//6 place go and fill the starts
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />


      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

