import React from "react";
import useFormContext from "../../hooks/useFormContext";
import Education from "./Education";

const EducationWrapper = () => {
  const { educationFormCount, setEducationFormCount } = useFormContext();

  return (
    <div>
      {new Array(educationFormCount).fill().map((_, i) => (
        <Education key={i} />
      ))}

      <button
        className="px-[21px] py-[14px] bg-[#62A1EB] text-white"
        onClick={() => setEducationFormCount((prev) => prev + 1)}
      >
        სხვა სასწავლებლის დამატება
      </button>
    </div>
  );
};

export default EducationWrapper;
