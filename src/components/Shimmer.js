import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 p-5 max-w-screen-xl mx-auto">
      {[...Array(18)].map((_, index) => (
        <div
          key={index}
          className="w-64 h-52 bg-gray-200 rounded-lg relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
