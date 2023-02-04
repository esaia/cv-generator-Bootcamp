import { useEffect } from "react";
import useFormContext from "./useFormContext";

const useMultyStep = (step) => {
  const { currentStep, setAllStep } = useFormContext();

  useEffect(() => {
    setAllStep(step.length);
  }, [currentStep, setAllStep, step.length]);

  return {
    steps: step,
    step: step[currentStep],
  };
};

export default useMultyStep;
