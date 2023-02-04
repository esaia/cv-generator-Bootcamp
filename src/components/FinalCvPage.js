import React from "react";
import Cv from "./Cv";
import ResetIcon from "./ResetIcon";

const FinalCvPage = () => {
  return (
    <div className="w-full  relative pt-20">
      {/* icon to back absolute */}
      <ResetIcon />

      <div className="m-auto max-w-[840px] bg-white   px-20 pt-10 pb-40 border-solid border-black  border-[0.8px] relative  ">
        <Cv />
      </div>
    </div>
  );
};

export default FinalCvPage;
