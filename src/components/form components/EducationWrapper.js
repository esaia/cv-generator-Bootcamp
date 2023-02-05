import React from "react";
import useFormContext from "../../hooks/useFormContext";
import Education from "./Education";

const EducationWrapper = () => {
  const { inputsData, setInputsData } = useFormContext();

  const addEducationForm = () => {
    setInputsData({
      ...inputsData,

      educations: [
        ...inputsData.educations,
        {
          institute: "",
          degree: "",
          due_date: "",
          description: "",
        },
      ],
    });
  };

  return (
    <div>
      {new Array(inputsData.educations.length).fill().map((_, i) => (
        <Education key={i} index={i} />
      ))}

      <button
        className="px-[21px] py-[14px] bg-[#62A1EB] text-white"
        onClick={addEducationForm}
      >
        სხვა სასწავლებლის დამატება
      </button>
    </div>
  );
};

export default EducationWrapper;
