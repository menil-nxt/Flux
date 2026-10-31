import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/5 shadow-2xl">
      <ul clasName="flex flex-col gap-4">
        <li className="flex items-start gap-2 mb-4 mt-4 ml-4">
          <img
            className="w-7 h-7 mr-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsWDekMcg-6oBcoG8IzLHYuWEbBsZqSSBHGd-IJ04bg&s=10"
            alt="Home"
          />
          Home
        </li>
        <li className="flex items-start gap-2 mb-4 ml-4">
          <img
            className="w-7 h-7 mr-2"
            src="https://img.icons8.com/m_rounded/1200/youtube-shorts.jpg"
            alt="Shorts"
          />
          Shorts
        </li>
        <li className="flex items-start gap-2 mb-4 ml-4">
          <img
            className="w-7 h-7 mr-2"
            src="https://cdn.creazilla.com/icons/3264375/subscriptions-icon-md.png"
            alt="Subscription"
          />
          Subscription
        </li>
        <li className="flex items-start gap-2 mb-4 ml-4">
          <img
            className="w-7 h-7 mr-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgU9r0JLOHT82XNjztUmi-SkhAhvxaR0ZAaAXoglZd5QK9cw_TIWamHUk&s=10"
            alt="History"
          />
          History
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
