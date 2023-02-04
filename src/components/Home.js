import React from "react";
import useFormContext from "../hooks/useFormContext";

const Home = () => {
  const { setCurrentStep } = useFormContext();

  return (
    <div className="h-[100vh] w-ful relative mx-[70px]">
      {/* header */}
      <div className="w-full border-b-[1px]  py-[25px] border-black absolute top-0">
        <img src="./img/logo.svg" alt="logo" />
      </div>

      <img
        src="./img/logo2.png"
        alt="logo2"
        className="w-[299px] h-[299px] bg-blend-multiply absolute top-[60%] left-[65%] translate-x-[-65%] translate-y-[-60%] "
      />

      <button
        onClick={() => setCurrentStep((prev) => prev + 1)}
        className="bg-black font-bold  text-white w-[464px] text-[20px]  px-[60px] py-[18px] rounded-[8px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        რეზიუმეს დამატება
      </button>
    </div>
  );
};

export default Home;
