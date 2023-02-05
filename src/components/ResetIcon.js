import React from "react";
import useFormContext from "../hooks/useFormContext";

const ResetIcon = () => {
  const { setCurrentStep, setInputsData, setphotoData, setImage } =
    useFormContext();

  const resetForm = () => {
    setCurrentStep(0);

    setphotoData(null);
    setImage(null);

    setInputsData({
      name: "",
      surname: "",
      image: "",
      about_me: "",
      email: "",
      phone_number: "",
      experiences: [
        {
          position: "",
          employer: "",
          start_date: "",
          due_date: "",
          description: "",
        },
      ],
      educations: [
        {
          institute: "",
          degree: "",
          due_date: "",
          description: "",
        },
      ],
    });
  };
  return (
    <div
      className="p-2 bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full absolute top-[45px] left-[48px] cursor-pointer"
      onClick={resetForm}
    >
      <img src="./img/leftArr.svg" alt="" />
    </div>
  );
};

export default ResetIcon;
