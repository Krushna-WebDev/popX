import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex mt-10 justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">
          Signin to your <br /> PopX account
        </h2>
        <p className="text-gray-500 text-md mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form className="space-y-6">
          <div className="relative w-72">
            <label
              className="absolute -top-3 left-3 px-1 bg-white text-sm text-purple-600 font-medium"
              htmlFor="email"
            >
              Email Address
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="w-full border rounded-md px-3 pt-4 pb-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="relative w-72">
            <label
              className="absolute -top-3 left-3 px-1 bg-white text-sm text-purple-600 font-medium"
              htmlFor="password"
            >
              Password
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter password"
              className="w-full border rounded-md px-3 pt-4 pb-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <Link
            to="/profile"
            className="block w-full bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg text-center cursor-pointer"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
