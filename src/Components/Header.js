import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        {/* hamburger icon */}
        <img
          className="h-8 mt-7 ml-5"
          alt="hamburger"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3VRkBWY1ZRjJSK3rrAP9edXzBj_hx5twPA5IkjB34fQ&s"
        />
        <img
          className="h-20 ml-3 mt-2"
          src="/images/Logo.jpg"
          alt="Flux logo"
        />
      </div>
      <div className="mt-2 mr-20 col-span-10 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-400 rounded-l-full focus:outline-none py-1 px-4 w-1/3 "
        />
        <button className=" bg-blue-500 hover:bg-blue-600 rounded-r-full py-1 px-4">
          Search
        </button>
      </div>
      <div className="flex justify-end mr-10 col-span-1">
        <img
          className="h-10 mt-6 ml-30"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lm5JGXEpTXzgMYCs5w9QO72lxWUodba6I-vHhS8m5A&s=10"
        />
      </div>
    </div>
  );
};

export default Header;
