import React from "react";
import { FaKey } from "react-icons/fa";

const IconCircle = () => {
  return (
    <div className="flex items-center gap-4">
      <div className=" rounded-full w-20 aspect-square flex justify-center items-center bg-pink-300">
        <FaKey className=" text-sky-900" size={20} />
      </div>
      <div className=" p-4 rounded-md shadow-lg">
        <div>
          <h2 className="font-bold">Lorem ipsum dolor sit amet.</h2>
        </div>
        <div>
          <h3 className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ex
            quasi praesentium
          </h3>
        </div>
      </div>
    </div>
  );
};

export default IconCircle;
