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
  } = useContext(FormContext);

  return {
    currentStep,
    setCurrentStep,
    allStep,
    setAllStep,
    experianceFormCount,
    setExperianceFormCount,
  };
};

export default useFormContext;
