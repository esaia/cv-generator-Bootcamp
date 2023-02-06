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
          <label htmlFor="">სასწავლებელი</label>

          <div className="inputsDiv">
            <input
              type="text"
              className="allinputs"
              placeholder="სასწავლებელი"
              name="institute"
              value={inputsData.educations[index].institute}
              onChange={(e) => onChangeInput(e, index)}
            />
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
          </div>

          <span className="inputDesc">მინიმუმ 2 სიმბოლო</span>
        </div>

        {/* ხარისხი & თარიღი */}
        <div className="flex justify-between">
          <div className="w-full mr-5 flex flex-col">
            <label htmlFor="degrees">ხარისხი</label>
            <select
              className="allinputs"
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
              className="allinputs"
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
            className="allinputs h-[103px] pb-[0px]"
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
