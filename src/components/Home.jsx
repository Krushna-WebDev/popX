import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="flex flex-col justify-end min-h-screen px-6 pb-10">
      <h1 className="text-3xl font-bold mb-2">Welcome to PopX</h1>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, beatae
        saepe hic sunt.
      </p>
      <Link to="/register" className="w-full text-center bg-purple-600 text-white py-3 rounded-md mb-4 font-semibold">
        Create Account
      </Link>
      <Link to="/login" className="w-full text-center border border-purple-600 text-gray-600 py-3 rounded-md font-semibold">
        Already Registered? Login
      </Link>
    </div>
  );
};

export default Home;
