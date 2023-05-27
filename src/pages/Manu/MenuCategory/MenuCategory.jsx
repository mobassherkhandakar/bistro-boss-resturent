import React from "react";
import ManuItems from "../../Home/ManuItems/ManuItems";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <>
      {title && <Cover title={title} img={img} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5">
        {items.map((item) => (
          <ManuItems item={item} key={item._id} />
        ))}
      </div>
      <div className="text-center my-2">
        <Link to={`/order/${title}`}>
          <button className=" btn btn-outline border-0 border-b-4 ">
            Order New
          </button>
        </Link>
      </div>
    </>
  );
};

export default MenuCategory;
