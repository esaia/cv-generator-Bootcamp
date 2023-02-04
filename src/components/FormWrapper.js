import React from "react";
import useFormContext from "../hooks/useFormContext";

const FormWrapper = ({ children, title }) => {
  const { currentStep, setCurrentStep, allStep } = useFormContext();

  const next = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const back = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="flex  ">
      <div className="w-[60%] min-h-[100vh] flex justify-center ">
        <div className="w-full h-full flex flex-col justify-between items-cente  max-w-[820px] px-[20px]  ">
          <div>
            {/* header */}
            <div className="header my-[47px] pb-[8px] border-solid border-b-black border-b-[1px] flex justify-between items-center">
              <h1 className="font-bold text-[24px]">{title} </h1>
              <p>
                {currentStep} / {allStep - 1}
              </p>
            </div>

            {/* icon to back absolute */}
            <div
              className="p-2 bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full absolute top-[45px] left-[48px]"
              onClick={() => setCurrentStep(0)}
            >
              <img src="./img/leftArr.svg" alt="" />
            </div>

            {/* component */}
            <div className="mycomponent">{children}</div>
          </div>

          {/* buttons */}
          <div className="buttons w-full flex flex-row-reverse justify-between my-[40px]">
            <button
              className="px-[35px] py-[14px] bg-[#6B40E3] text-white rounded-[4px]"
              onClick={next}
            >
              {currentStep === allStep - 1 ? "დასრულება" : "შემდეგი"}
            </button>

            {currentStep > 1 && (
              <button
                className="px-[35px] py-[14px] bg-[#6B40E3] text-white rounded-[4px]"
                onClick={back}
              >
                უკან
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="w-[40%] bg-white h-full">es cv generatori</div>
    </div>
  );
};

export default FormWrapper;
