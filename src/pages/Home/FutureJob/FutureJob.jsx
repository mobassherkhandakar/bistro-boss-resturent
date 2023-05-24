import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import './FutureJob.css'
import fuatur from "../../../assets/home/featured.jpg";

const FutureJob = () => {
  return (
    <>
      <div className="bg-future bg-fixed text-white">
        <div className="text-black">
        <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
        </div>
        <div className="md:flex  bg-slate-500 bg-opacity-30 justify-between items-center gap-4 py-12 px-36">
          <div>
            <img  src={fuatur} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Wher i can get some</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              eos vel quae quidem recusandae dolores officia ex. Id nisi,
              quibusdam, eius voluptatem autem culpa mollitia illum nulla,
              perferendis vero corporis sapiente exercitationem molestiae
              tempore alias voluptas facilis distinctio aliquid cum?
            </p>
            <button className="btn text-white btn-outline">Order now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FutureJob;
