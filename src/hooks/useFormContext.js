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

    image,
    setImage,

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

    image,
    setImage,

    photoData,
    setphotoData,

    onChangeInput,
  };
};

export default useFormContext;
