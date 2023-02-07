import React, { useState } from "react";
import Cv from "./Cv";
import ResetIcon from "./ResetIcon";

const FinalCvPage = () => {
  const [showModule, setshowModule] = useState(true);
  return (
    <div className="w-full  relative pt-[50px] ">
      {/* icon to back absolute */}
      <ResetIcon />

      <div className="m-auto max-w-[840px] bg-white   px-20 pt-10 pb-40 border-solid border-black  border-[0.8px] relative  ">
        <Cv />
      </div>

      {showModule && (
        <div className="absolute w-[300px] top-0 right-10 bg-white p-5 mt-[50px]  shadow-xl">
          <div className="relative w-full h-full">
            <p className="text-[20px]">რეზიუმე წარმატებით გაიგზავნა 🎉</p>
            <img
              src="./img/closeIcon.svg"
              alt="closeIcon"
              className="absolute right-0 top-0 cursor-pointer"
              onClick={() => setshowModule(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalCvPage;
