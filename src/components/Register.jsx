import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [isAgency, setIsAgency] = useState("yes");
  return (
    <>
      <div className="p-5">
        <h2 className="text-2xl font-bold my-6">
          Create your
          <br />
          PopX account
        </h2>

        <form className="space-y-4 flex justify-between flex-col">
          <div className="relative">
            <label
              htmlFor="fullName"
              className="absolute -top-3 left-3 bg-white px-1 text-sm text-purple-600 font-medium"
            >
              Full Name<span className="text-purple-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter full name"
              className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="phone"
              className="absolute -top-3 left-3 bg-white px-1 text-sm text-purple-600 font-medium"
            >
              Phone Number<span className="text-purple-600">*</span>
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-3 left-3 bg-white px-1 text-sm text-purple-600 font-medium"
            >
              Email Address<span className="text-purple-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="absolute -top-3 left-3 bg-white px-1 text-sm text-purple-600 font-medium"
            >
              Password<span className="text-purple-600">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="company"
              className="absolute -top-3 left-3 bg-white px-1 text-sm text-purple-600 font-medium"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              placeholder="Enter company name"
              className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">
              Are you an Agency?<span className="text-purple-600">*</span>
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={isAgency === "yes"}
                  onChange={() => setIsAgency("yes")}
                  className="form-radio text-purple-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={isAgency === "no"}
                  onChange={() => setIsAgency("no")}
                  className="form-radio text-purple-600"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <Link
            to="/profile"
            className="w-full text-center  mt-25 font-bold  bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Create Account
          </Link>
        </form>
      </div>
    </>
  );
};

export default Register;
