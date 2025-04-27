import React from "react";

const Profile = () => {
  return (
    <>
      <div>
        <div className=" p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Account Settings
          </h2>
        </div>

        <div className="flex flex-col bg-gray-100 min-h-screen p-6 ">
          <div className="flex relative">
            <div className="relative">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src="/src/assets/image.png"
                alt="Profile"
              />

              <div className="absolute bottom-0 right-0 bg-purple-500 p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553 2.276a1 1 0 010 1.448L15 16m0-6v6m0-6H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2z"
                  />
                </svg>
              </div>
            </div>

            <div className="ml-4 text-left">
              <h3 className="text-lg font-semibold text-gray-700">Marry Doe</h3>
              <p className="text-sm text-gray-500">Marry@gmail.com</p>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
          <p className="border mt-8 border-dashed border-gray-300"></p>
        </div>
      </div>
    </>
  );
};

export default Profile;
