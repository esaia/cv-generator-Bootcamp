import React, { useEffect, useState } from "react";
import useFormContext from "../../hooks/useFormContext";

const Education = ({ index }) => {
  const { inputsData, onChangeInput, validations } = useFormContext();

  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    const fetchDegrees = async () => {
      const res = await fetch(
        "https://resume.redberryinternship.ge/api/degrees"
      );
      const data = await res.json();
      setDegrees(data);
    };

    fetchDegrees();
  }, []);

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
          <div className="w-full mr-5 flex flex-col">
            <label htmlFor="degrees">ხარისხი</label>
            <select
              className={
                inputsData.educations[index].degree
                  ? validations.educations[index].degree
                    ? "correctInput "
                    : "incorrectInput"
                  : "allinputs"
              }
              name="degree"
              id="degrees"
              value={inputsData.educations[index].degree}
              onChange={(e) => onChangeInput(e, index)}
            >
              {degrees.map((degree) => {
                return (
                  <option key={degree.id} value={`${degree.title}`}>
                    {degree.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="w-full ml-5">
            <label htmlFor="">დამთავრების რიცხვი</label>
            <input
              type="date"
              className={
                inputsData.educations[index].due_date
                  ? validations.educations[index].due_date
                    ? "correctInput "
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
