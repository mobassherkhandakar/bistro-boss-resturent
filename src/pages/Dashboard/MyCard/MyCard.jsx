import React from "react";
import useCards from "../../../Hook/useCards";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useTitle from "../../../Hook/useTitele";
import SectionTitle from "../../Home/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const MyCard = () => {
  useTitle("My-Card");
  const [refetch, card] = useCards();
  const total = card.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cards/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your Product has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <SectionTitle subHeading={"My-Card"} heading={"WANNA ADD MORE?"} />
      <div className="uppercase font-semibold h-[60px] flex justify-between items-center">
        <h3 className="text-xl">Total Items: {card.length}</h3>
        <h3 className="text-xl">Total Price: ${total.toFixed(2)}</h3>
        <Link to="/dashboard/payment"><button className="btn btn-warning btn-sm">PAY</button></Link>
      </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Food Item</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {card.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-end">${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost bg-red-600  text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
