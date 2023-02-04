import React, { createContext, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [allStep, setAllStep] = useState(0);
  const [experianceFormCount, setExperianceFormCount] = useState(1);
  const [educationFormCount, setEducationFormCount] = useState(1);

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
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
