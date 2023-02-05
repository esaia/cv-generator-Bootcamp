import React, { createContext, useEffect, useState } from "react";

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
  const [inputsData, setInputsData] = useState(getFromLocalStorage());

  const [image, setImage] = useState();

  const [photoData, setphotoData] = useState(
    localStorage.getItem("photoData") ? localStorage.getItem("photoData") : null
  );

  const saveInfoObj = {
    currentStep,
  };

  useEffect(() => {
    localStorage.setItem("inputData", JSON.stringify(inputsData));
    localStorage.setItem("saveInfoObj", JSON.stringify(saveInfoObj));
  }, [inputsData, currentStep]);

  const onChangeInput = (e, i) => {
    switch (currentStep) {
      case 1:
        if (e.target.name === "image") {
          setImage(e.target.files[0]);

          return setInputsData({
            ...inputsData,
            [e.target.name]: e.target.files[0].name,
          });
        }
        setInputsData({
          ...inputsData,
          [e.target.name]: e.target.value,
        });
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

        inputsData,
        setInputsData,

        image,
        setImage,

        photoData,
        setphotoData,

        onChangeInput,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
