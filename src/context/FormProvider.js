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

  const validations_init = {
    name: false,
    surname: false,
    image: false,
    about_me: true,
    email: false,
    phone_number: false,
    experiences: [
      {
        position: false,
        employer: false,
        start_date: false,
        due_date: false,
        description: false,
      },
    ],
    educations: [
      {
        institute: false,
        degree: false,
        due_date: false,
        description: false,
      },
    ],
  };

  const [currentStep, setCurrentStep] = useState(
    getsaveInfoObj()?.currentStep || 0
  );
  const [allStep, setAllStep] = useState(0);
  const [inputsData, setInputsData] = useState(getFromLocalStorage());
  const [validations, setValidations] = useState(
    getsaveInfoObj()?.validations || validations_init
  );
  const [image, setImage] = useState();
  const [photoData, setphotoData] = useState(
    localStorage.getItem("photoData") ? localStorage.getItem("photoData") : null
  );

  const saveInfoObj = {
    currentStep,
    validations,
  };

  useEffect(() => {
    localStorage.setItem("inputData", JSON.stringify(inputsData));
    localStorage.setItem("saveInfoObj", JSON.stringify(saveInfoObj));
  }, [inputsData, currentStep]);

  const onChangeInput = (e, i) => {
    switch (currentStep) {
      case 1:
        if (e.target.name === "image") {
          if (photoData) {
            setValidations({ ...validations, [e.target.name]: true });
          } else {
            setValidations({ ...validations, [e.target.name]: false });
          }

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

        switch (e.target.name) {
          case "name":
            const nameRegex = /^[ა-ჰ]{2,}$/;
            if (nameRegex.test(e.target.value)) {
              setValidations({ ...validations, [e.target.name]: true });
            } else {
              setValidations({
                ...validations,
                [e.target.name]: false,
              });
            }
            break;

          case "surname":
            const surnameRegex = /^[ა-ჰ]{2,}$/;
            if (surnameRegex.test(e.target.value)) {
              setValidations({ ...validations, [e.target.name]: true });
            } else {
              setValidations({
                ...validations,
                [e.target.name]: false,
              });
            }
            break;

          case "email":
            const emailRegex = /@redberry\.ge$/;
            if (emailRegex.test(e.target.value)) {
              setValidations({ ...validations, [e.target.name]: true });
            } else {
              setValidations({
                ...validations,
                [e.target.name]: false,
              });
            }
            break;

          case "phone_number":
            const phoneRegex = /^\+995[0-9]{9}$/;

            if (phoneRegex.test(e.target.value)) {
              setValidations({ ...validations, [e.target.name]: true });
            } else {
              setValidations({
                ...validations,
                [e.target.name]: false,
              });
            }
            break;

          default:
            break;
        }

        break;
      case 2:
        inputsData.experiences[i] = {
          ...inputsData.experiences[i],
          [e.target.name]: e.target.value,
        };
        setInputsData({ ...inputsData });

        switch (e.target.name) {
          case "position":
          case "employer":
            const positionRegex = /^.{2,}$/;
            if (positionRegex.test(e.target.value)) {
              validations.experiences[i] = {
                ...validations.experiences[i],
                [e.target.name]: true,
              };
              setValidations({ ...validations });
            } else {
              validations.experiences[i] = {
                ...validations.experiences[i],
                [e.target.name]: false,
              };
              setValidations({ ...validations });
            }

            break;

          case "start_date":
          case "start_date":
          case "due_date":
          case "description":
            if (e.target.value) {
              validations.experiences[i] = {
                ...validations.experiences[i],
                [e.target.name]: true,
              };
              setValidations({ ...validations });
            } else {
              validations.experiences[i] = {
                ...validations.experiences[i],
                [e.target.name]: false,
              };
              setValidations({ ...validations });
            }
            break;

          default:
            break;
        }

        break;
      case 3:
        inputsData.educations[i] = {
          ...inputsData.educations[i],
          [e.target.name]: e.target.value,
        };
        setInputsData({ ...inputsData });

        switch (e.target.name) {
          case "institute":
            const instituteRegex = /^.{2,}$/;
            if (instituteRegex.test(e.target.value)) {
              validations.educations[i] = {
                ...validations.educations[i],
                [e.target.name]: true,
              };
              setValidations({ ...validations });
            } else {
              validations.educations[i] = {
                ...validations.educations[i],
                [e.target.name]: false,
              };
              setValidations({ ...validations });
            }
            break;

          case "degree":
          case "due_date":
          case "description":
            if (e.target.value) {
              validations.educations[i] = {
                ...validations.educations[i],
                [e.target.name]: true,
              };
              setValidations({ ...validations });
            } else {
              validations.educations[i] = {
                ...validations.educations[i],
                [e.target.name]: false,
              };
              setValidations({ ...validations });
            }
            break;

          default:
            break;
        }

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

        validations,
        setValidations,

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
