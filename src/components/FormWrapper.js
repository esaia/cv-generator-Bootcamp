import React from "react";
import useFormContext from "../hooks/useFormContext";
import Cv from "./Cv";
import ResetIcon from "./ResetIcon";

const FormWrapper = ({ children, title }) => {
  const { currentStep, setCurrentStep, allStep, validations, inputsData } =
    useFormContext();

  const { name, surname, image, email, phone_number } = validations;

  const next = () => {
    const hasAllTrueValues = (obj) => {
      for (const prop in obj) {
        if (!obj[prop]) return false;
      }
      return true;
    };

    const hasAllFalseValues = (obj) => {
      for (const prop in obj) {
        if (obj[prop]) return false;
      }
      return true;
    };

    const hasArrayAllTrueValues = (arr) => arr.every((value) => value === true);

    switch (currentStep) {
      case 1:
        if (name && surname && image && email && phone_number) {
          setCurrentStep((prev) => prev + 1);
        } else {
          setCurrentStep((prev) => prev);
        }
        break;

      case 2:
        let validationCheckerSecondPage = [];

        for (let i = 0; i < validations.experiences.length; i++) {
          if (hasAllTrueValues(validations.experiences[i])) {
            validationCheckerSecondPage.push(true);
          } else {
            if (hasAllFalseValues(inputsData.experiences[i]) && i !== 0) {
              validationCheckerSecondPage.push(true);
            } else {
              validationCheckerSecondPage.push(false);
            }
          }
        }

        if (hasArrayAllTrueValues(validationCheckerSecondPage)) {
          setCurrentStep((prev) => prev + 1);
        } else {
          setCurrentStep((prev) => prev);
        }
        break;

      case 3:
        let validationCheckerthirdPage = [];

        for (let i = 0; i < validations.educations.length; i++) {
          if (hasAllTrueValues(validations.educations[i])) {
            validationCheckerthirdPage.push(true);
          } else {
            if (hasAllFalseValues(inputsData.educations[i]) && i !== 0) {
              validationCheckerthirdPage.push(true);
            } else {
              validationCheckerthirdPage.push(false);
            }
          }
        }

        if (hasArrayAllTrueValues(validationCheckerthirdPage)) {
          console.log("yes");
          // setCurrentStep((prev) => prev + 1);
        } else {
          console.log("no");
          // setCurrentStep((prev) => prev);
        }
        break;

      default:
        break;
    }
  };

  const back = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="flex">
      <div className="w-[60%] min-h-[100vh] flex justify-center ">
        <div className="w-full h-full flex flex-col justify-between items-cente  max-w-[820px] px-[20px]  ">
          <div>
            {/* header */}
            <div className="header my-[47px] pb-[8px] border-solid border-b-black border-b-[1px] flex justify-between items-center">
              <h1 className="font-bold text-[24px]">{title} </h1>
              <p>
                {currentStep} / {allStep - 2}
              </p>
            </div>

            {/* icon to back absolute */}
            <ResetIcon />

            {/* component */}
            <div className="mycomponent">{children}</div>
          </div>

          {/* buttons */}
          <div className="buttons w-full flex flex-row-reverse justify-between my-[40px]">
            <button
              className="px-[35px] py-[14px] bg-[#6B40E3] text-white rounded-[4px]"
              onClick={next}
            >
              {currentStep === allStep - 2 ? "დასრულება" : "შემდეგი"}
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

      <div className="relative w-[40%] bg-white min-h-[100vh] h-full py-5 px-20">
        <Cv />
      </div>
    </div>
  );
};

export default FormWrapper;
