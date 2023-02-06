import React, { useEffect, useRef, useState } from "react";
import useFormContext from "../../hooks/useFormContext";

const Education = ({ index }) => {
  const { inputsData, setInputsData, onChangeInput, validations } =
    useFormContext();

  const [showSelection, setshowSelection] = useState(false);
  const [selectedDegree, setselectedDegree] = useState(
    inputsData.educations[index].degree || ""
  );
  const [degrees, setDegrees] = useState([]);

  const selectRef = useRef(null);

  const handleClickOutside = (e) => {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      setshowSelection(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  useEffect(() => {
    inputsData.educations[index] = {
      ...inputsData.educations[index],
      degree: selectedDegree,
    };

    if (selectedDegree && selectedDegree !== "აირჩიეთ ხარისხი") {
      validations.educations[index] = {
        ...validations.educations[index],
        degree: true,
      };
    }

    setInputsData({ ...inputsData });
  }, [selectedDegree]);

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
          <div className="w-full mr-5 flex flex-col relative">
            <label htmlFor="degrees">ხარისხი</label>

            <div
              className={
                inputsData.educations[index].degree
                  ? "allinputs h-full relative flex justify-between px-3 items-center bg-white  cursor-pointer correctInput"
                  : "allinputs h-full relative flex justify-between px-3 items-center  bg-white cursor-pointer"
              }
              onClick={() => setshowSelection(!showSelection)}
              ref={selectRef}
            >
              <p
                className={`
                 ${selectedDegree === "" && "text-gray-500 "}
               `}
              >
                {selectedDegree === "" ? "აირჩიეთ ხარისხი" : selectedDegree}
              </p>
              <img src="/img/arrowIcon.svg" alt="arrowIcon" />
              <div
                className={`absolute top-[45px] left-0 w-full rounded-[4px] bg-white py-2  shadow-lg cursor-pointer ${
                  showSelection ? "block" : "hidden"
                } `}
              >
                {degrees.map((degree) => {
                  return (
                    <p
                      key={degree.id}
                      className="py-[5px] px-3 hover:text-white hover:bg-gray-400"
                      onClick={() => {
                        setselectedDegree(degree.title);
                      }}
                    >
                      {degree.title}
                    </p>
                  );
                })}
              </div>
            </div>
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
