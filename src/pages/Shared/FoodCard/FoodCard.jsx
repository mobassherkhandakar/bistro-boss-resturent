import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCards from "../../../Hook/useCards";


const FoodCard = ({ item }) => {
  const { name, recipe, price, image,_id } = item;
  const [refetch] = useCards()
  const location = useLocation()
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const cardItem = {foodItemId: _id, name, price, image, email: user?.email}
  const handleAddToCard = (item) => {
    console.log(item);
    if (user && user?.email) {
      fetch("http://localhost:5000/cards",{
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cardItem)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch()
            Swal.fire({
              icon: "success",
              title: "Your Food has been added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
    else{
      Swal.fire({
        title: `You don't added product without login`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login new",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state: {from: location}});
        }
      });
    }
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-screen" src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 bg-black px-4 text-white mr-5 mt-5">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCard(item)}
            className="btn btn-primary"
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
