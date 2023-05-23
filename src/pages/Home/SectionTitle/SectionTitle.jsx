import React from "react";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center md:w-4/12 my-8 mx-auto">
      <p className="text-lg text-yellow-600 mb-2">---{subHeading}---</p>
      <h2 className="text-3xl uppercase border-y-4 py-3  font-bold ">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
