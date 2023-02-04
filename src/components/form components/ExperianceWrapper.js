import React from "react";
import useFormContext from "../../hooks/useFormContext";
import Experience from "./Experiance";

const ExperianceWrapper = () => {
  const { experianceFormCount, setExperianceFormCount } = useFormContext();

  return (
    <div>
      {new Array(experianceFormCount).fill().map((_, i) => (
        <Experience key={i} />
      ))}

      <button
        className="px-[21px] py-[14px] bg-[#62A1EB] text-white"
        onClick={() => setExperianceFormCount((prev) => prev + 1)}
      >
        მეტი გამოცდილების დამატება
      </button>
    </div>
  );
};

export default ExperianceWrapper;
