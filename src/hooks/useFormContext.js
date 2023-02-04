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
    inputsData,
    setInputsData,
    onChangeInput,
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

    inputsData,
    setInputsData,

    onChangeInput,
  };
};

export default useFormContext;
