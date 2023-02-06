import { useContext } from "react";
import { FormContext } from "../context/FormProvider";

const useFormContext = () => {
  const {
    currentStep,
    setCurrentStep,

    allStep,
    setAllStep,

    inputsData,
    setInputsData,

    validations,
    setValidations,

    photoData,
    setphotoData,

    onChangeInput,
  } = useContext(FormContext);

  return {
    currentStep,
    setCurrentStep,

    allStep,
    setAllStep,

    inputsData,
    setInputsData,

    validations,
    setValidations,

    photoData,
    setphotoData,

    onChangeInput,
  };
};

export default useFormContext;
