import React from "react";

const FoodCard = ({ item }) => {
  const { name, recipe, price, image } = item;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-screen" src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 bg-black px-4 text-white mr-5 mt-5">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
