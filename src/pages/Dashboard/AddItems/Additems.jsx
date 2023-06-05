import React from "react";
import SectionTitle from "../../Home/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const image_secret_token = import.meta.env.VITE_image_secret_token;
const Additems = () => {
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_secret_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imgUrl = imageResponse.data.display_url;
          const { name, price, recipe, category } = data;
          const menuItem = {
            name,
            price: parseFloat(price),
            recipe,
            category,
            image: imgUrl,
          };
          axiosSecure.post("/menu", menuItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div>
      <SectionTitle subHeading={"whats new"} heading={"Add  Items"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Recipe name?</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Name"
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex justify-between gap-10 items-center">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text-alt">Category</span>
            </label>
            <select
              defaultValue={"category"}
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Category</option>
              <option value={"pizza"}>Pizza</option>
              <option value={"soup"}>Soup</option>
              <option value={"salad"}>Salad </option>
              <option value={"desert"}>Desert</option>
              <option value={"drinks"}>Drinks</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">price</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="price"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe details"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered file-input-info w-full max-w-xs"
          />
        </div>
        <div className="my-4 flex justify-center">
          <button className="btn btn-warning" type="submit">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default Additems;
