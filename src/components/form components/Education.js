import React from "react";
import useFormContext from "../../hooks/useFormContext";
import SelectDegrees from "../SelectDegrees";

const Education = ({ index }) => {
  const { inputsData, onChangeInput, validations, thirdButtonClicked } =
    useFormContext();

  const hasAllFalseValues = (obj) => {
    for (const prop in obj) {
      if (obj[prop]) return false;
    }
    return true;
  };

  return (
    <div>
      <form className="flex flex-col gap-[40px] mb-10 pb-10 border-b-[1px] border-solid border-[#C1C1C1]">
        {/* სასწავლებელი */}
        <div>
          <label
            className={
              inputsData.educations[index].institute &&
              !validations.educations[index].institute
                ? "text-[#E52F2F]"
                : ""
            }
          >
            სასწავლებელი
          </label>

          <div className="inputsDiv">
            <input
              type="text"
              className={
                inputsData.educations[index].institute
                  ? validations.educations[index].institute
                    ? "correctInput "
                    : "incorrectInput"
                  : thirdButtonClicked
                  ? hasAllFalseValues(validations.educations[index]) &&
                    index !== 0
                    ? "allinputs"
                    : "incorrectInput"
                  : "allinputs"
              }
              placeholder="სასწავლებელი"
              name="institute"
              value={inputsData.educations[index].institute}
              onChange={(e) => onChangeInput(e, index)}
            />

            {inputsData.educations[index]?.institute && (
              <img
                src={
                  validations.educations[index]?.institute
                    ? "./img/correctIcon.svg"
                    : "./img/errorIcon.svg"
                }
                alt="successIcon"
                className={
                  validations.educations[index]?.institute
                    ? "correctIcon"
                    : "errorIcon"
                }
              />
            )}
          </div>

          <span className="inputDesc">მინიმუმ 2 სიმბოლო</span>
        </div>

        {/* ხარისხი & თარიღი */}
        <div className="flex justify-between">
          <SelectDegrees
            index={index}
            isEmpty={hasAllFalseValues(validations.educations[index])}
          />

          <div className="w-full ml-5">
            <label htmlFor="">დამთავრების რიცხვი</label>
            <input
              type="date"
              className={
                inputsData.educations[index].due_date
                  ? validations.educations[index].due_date
                    ? "correctInput "
                    : "incorrectInput"
                  : thirdButtonClicked
                  ? hasAllFalseValues(validations.educations[index]) &&
                    index !== 0
                    ? "allinputs"
                    : "incorrectInput"
                  : "allinputs"
              }
              name="due_date"
              value={inputsData.educations[index].due_date}
              onChange={(e) => onChangeInput(e, index)}
            />
          </div>
        </div>

        {/* chems shesaxeb */}

        <div>
          <label htmlFor="">აღწერა</label>
          <textarea
            type="text"
            className={`
            ${
              inputsData.educations[index].description
                ? inputsData.educations[index].description
                  ? "correctInput "
                  : "incorrectInput"
                : thirdButtonClicked
                ? hasAllFalseValues(validations.educations[index]) &&
                  index !== 0
                  ? "allinputs"
                  : "incorrectInput"
                : "allinputs"
            }
             h-[103px] pb-[0px]
           `}
            placeholder="განათლების აღწერა"
            name="description"
            value={inputsData.educations[index].description}
            onChange={(e) => onChangeInput(e, index)}
          />
        </div>
      </form>
    </div>
  );
};

export default Education;
