import React, { useEffect, useRef, useState } from "react";
import useFormContext from "../hooks/useFormContext";

const SelectDegrees = ({ index }) => {
  const { inputsData, setInputsData, validations } = useFormContext();

  const [showSelection, setshowSelection] = useState(false);
  const selectRef = useRef(null);
  const [degrees, setDegrees] = useState([]);
  const [selectedDegree, setselectedDegree] = useState(
    inputsData.educations[index].degree || ""
  );

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
          className={`absolute top-[45px] left-0 w-full rounded-[4px] bg-white py-2  shadow-lg cursor-pointer z-20 ${
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
  );
};

export default SelectDegrees;
