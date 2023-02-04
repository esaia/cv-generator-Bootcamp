import React, { createContext, useEffect, useState } from "react";
import FinalCvPage from "../components/FinalCvPage";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const getFromLocalStorage = () => {
    if (JSON.parse(localStorage.getItem("inputData"))) {
      return JSON.parse(localStorage.getItem("inputData"));
    } else {
      return initial_state;
    }
  };

  const getsaveInfoObj = () => {
    if (JSON.parse(localStorage.getItem("saveInfoObj"))) {
      return JSON.parse(localStorage.getItem("saveInfoObj"));
    }
  };

  const initial_state = {
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
  };

  const [currentStep, setCurrentStep] = useState(
    getsaveInfoObj()?.currentStep || 0
  );

  const [allStep, setAllStep] = useState(0);
  const [experianceFormCount, setExperianceFormCount] = useState(
    getsaveInfoObj()?.experianceFormCount || 1
  );
  const [educationFormCount, setEducationFormCount] = useState(
    getsaveInfoObj()?.educationFormCount || 1
  );

  const [inputsData, setInputsData] = useState(getFromLocalStorage());

  const saveInfoObj = {
    currentStep,
    experianceFormCount,
    educationFormCount,
  };

  useEffect(() => {
    localStorage.setItem("inputData", JSON.stringify(inputsData));
    localStorage.setItem("saveInfoObj", JSON.stringify(saveInfoObj));
  }, [inputsData, currentStep]);

  // console.log(inputsData.experiences[0].position);

  const onChangeInput = (e, i) => {
    switch (currentStep) {
      case 1:
        setInputsData({ ...inputsData, [e.target.name]: e.target.value });
        break;
      case 2:
        inputsData.experiences[i] = {
          ...inputsData.experiences[i],
          [e.target.name]: e.target.value,
        };
        setInputsData({ ...inputsData });
        break;

      case 3:
        inputsData.educations[i] = {
          ...inputsData.educations[i],
          [e.target.name]: e.target.value,
        };
        setInputsData({ ...inputsData });

        break;

      default:
        setInputsData({ ...inputsData });
    }
  };

  return (
    <FormContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        allStep,
        setAllStep,
        experianceFormCount,
        setExperianceFormCount,
        educationFormCount,
        setEducationFormCount,
        inputsData,
        setInputsData,

        onChangeInput,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
