import React from "react";
import useFormContext from "../hooks/useFormContext";
import Cv from "./Cv";

const FinalCvPage = () => {
  const { setCurrentStep } = useFormContext();

  return (
    <div className="w-full  relative pt-20">
      {/* icon to back absolute */}
      <div
        className="p-2 bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full absolute top-[45px] left-[48px] cursor-pointer"
        onClick={() => setCurrentStep(0)}
      >
        <img src="./img/leftArr.svg" alt="" />
      </div>

      <div className="m-auto max-w-[840px] bg-white   px-20 pt-10 pb-40 border-solid border-black  border-[0.8px] relative  ">
        <Cv />
      </div>
    </div>
  );
};

export default FinalCvPage;
