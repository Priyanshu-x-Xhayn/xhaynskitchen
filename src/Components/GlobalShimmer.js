import React from 'react';

const GlobalShimmer = () => {
  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-9/12 bg-white rounded-md shadow-md p-8">
        {/* Restaurant Name Shimmer */}
        <div className="animate-pulse mb-8">
          <div className="h-8 bg-gray-300 rounded-md"></div>
          <div className="h-6 bg-gray-300 rounded-md mt-2"></div>
        </div>

        {/* Restaurant Info Shimmer */}
        <div className="animate-pulse mb-8">
          <div className="h-4 bg-gray-300 rounded-md"></div>
          <div className="h-4 bg-gray-300 rounded-md mt-2"></div>
        </div>

        {/* Accordion Shimmer */}
        <div className="animate-pulse">
          <div className="w-full bg-gray-300 rounded-md mb-4">
            <div className="flex justify-between items-center p-4">
              <div className="h-4 w-3/4 bg-gray-300 rounded-md"></div>
              <div className="h-4 w-1/4 bg-gray-300 rounded-md"></div>
            </div>
            <div className="p-4">
              <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
              <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
              <div className="h-6 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>

        {/* Item List Shimmer */}
        <div className="animate-pulse">
          <div className="w-full bg-gray-300 rounded-md p-4">
            <div className="h-12 bg-gray-300 rounded-md mb-4"></div>
            <div className="h-12 bg-gray-300 rounded-md mb-4"></div>
            <div className="h-12 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalShimmer;
