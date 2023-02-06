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

    firstButtonClicked,
    setFirstButtonClicked,

    secondButtonClicked,
    setSecondButtonClicked,

    thirdButtonClicked,
    setThirdButtonClicked,
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

    firstButtonClicked,
    setFirstButtonClicked,

    secondButtonClicked,
    setSecondButtonClicked,

    thirdButtonClicked,
    setThirdButtonClicked,
  };
};

export default useFormContext;
