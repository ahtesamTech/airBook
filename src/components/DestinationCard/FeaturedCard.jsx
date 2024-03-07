import React from 'react';

const FeaturedCard = ({img, title}) => {
    return (
        <div>
             <div className="w-80 md:w-auto md:max-w-sm px-3 pt-3 pb-2 rounded-xl shadow-xl shadow-gray-400 transform hover:scale-105 transition duration-700">
      
      <div className="relative">
        <img className="w-full rounded-xl" src={img} alt="Colors" />
       
      </div>
      <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">{title}</h1>
      <div className="my-4 flex justify-center">
   
        <button className="mt-4 text-xl w-1/2 text-black bg-yellow-500 py-2 rounded-md shadow-lg">View More</button>
      </div>
    </div>
        </div>
    );
};

export default FeaturedCard;