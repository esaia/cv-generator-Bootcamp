import React from "react";
import useFormContext from "../../hooks/useFormContext";
import Experience from "./Experiance";

const ExperianceWrapper = () => {
  const {
    experianceFormCount,
    setExperianceFormCount,
    inputsData,
    setInputsData,
  } = useFormContext();

  const addExperianceForm = () => {
    setExperianceFormCount((prev) => prev + 1);
    setInputsData({
      ...inputsData,
      experiences: [
        ...inputsData.experiences,
        {
          position: "",
          employer: "",
          start_date: "",
          due_date: "",
          description: "",
        },
      ],
    });
  };

  return (
    <div>
      {new Array(experianceFormCount).fill().map((_, i) => (
        <Experience key={i} index={i} />
      ))}

      <button
        className="px-[21px] py-[14px] bg-[#62A1EB] text-white"
        onClick={addExperianceForm}
      >
        მეტი გამოცდილების დამატება
      </button>
    </div>
  );
};

export default ExperianceWrapper;
