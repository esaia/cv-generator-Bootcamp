import React from "react";
import useFormContext from "../../hooks/useFormContext";
import Experience from "../../components/form components/Experiance";

const ExperianceWrapper = () => {
  const { inputsData, setInputsData, validations, setValidations } =
    useFormContext();

  const addExperianceForm = () => {
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

    setValidations({
      ...validations,
      experiences: [
        ...validations.experiences,
        {
          position: false,
          employer: false,
          start_date: false,
          due_date: false,
          description: false,
        },
      ],
    });
  };

  return (
    <div>
      {new Array(inputsData.experiences.length).fill().map((_, i) => (
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
