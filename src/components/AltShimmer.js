import React from "react";

const AltShimmer = () => {
  return (
    <div className=" mt-36 bg-gray-300 animate-pulse rounded-lg w-64 h-80">
      
      <div className="bg-gray-400 w-60 h-40 rounded-lg m-2"></div>

    
      <div className="h-4 bg-gray-400 rounded mb-2"></div>

      {/* Simulating Text */}
      <div className="h-4 bg-gray-400 rounded mb-2"></div>
      <div className="h-4 bg-gray-400 rounded mb-2"></div>

      {/* Simulating Button */}
      <div className="h-6 bg-gray-400 rounded mt-4"></div>
    </div>
  );
};

export default AltShimmer;
