import React, { createContext, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(2);
  const [allStep, setAllStep] = useState(0);
  const [experianceFormCount, setExperianceFormCount] = useState(1);

  return (
    <FormContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        allStep,
        setAllStep,
        experianceFormCount,
        setExperianceFormCount,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
