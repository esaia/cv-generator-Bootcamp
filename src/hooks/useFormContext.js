import { useContext } from "react";
import { FormContext } from "../context/FormProvider";

const useFormContext = () => {
  const {
    currentStep,
    setCurrentStep,
    allStep,
    setAllStep,
    experianceFormCount,
    setExperianceFormCount,
    educationFormCount,
    setEducationFormCount,
  } = useContext(FormContext);

  return {
    currentStep,
    setCurrentStep,
    allStep,
    setAllStep,
    experianceFormCount,
    setExperianceFormCount,
    educationFormCount,
    setEducationFormCount,
  };
};

export default useFormContext;
