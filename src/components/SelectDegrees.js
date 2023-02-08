import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import useFormContext from "../hooks/useFormContext";

const SelectDegrees = ({ index, isEmpty }) => {
  const { inputsData, setInputsData, validations, thirdButtonClicked } =
    useFormContext();

  const [showSelection, setshowSelection] = useState(false);
  const selectRef = useRef(null);
  const [degrees, setDegrees] = useState([]);
  const [selectedDegree, setselectedDegree] = useState({
    title: inputsData.educations[index].degree,
    id: inputsData.educations[index].degree_id,
  });

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
      degree: selectedDegree.title,
      degree_id: selectedDegree.id,
    };

    setInputsData({ ...inputsData });
    if (selectedDegree.title && selectedDegree.title !== "აირჩიეთ ხარისხი") {
      validations.educations[index] = {
        ...validations.educations[index],
        degree: true,
      };
    }
  }, [selectedDegree]);

  useEffect(() => {
    axios
      .get("https://resume.redberryinternship.ge/api/degrees")
      .then(function (response) {
        setDegrees(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full mr-5 flex flex-col relative">
      <label htmlFor="degrees">ხარისხი</label>

      <div
        className={
          inputsData.educations[index].degree
            ? "allinputs h-full relative flex justify-between px-3 items-center bg-white  cursor-pointer correctInput"
            : thirdButtonClicked
            ? isEmpty && index !== 0
              ? "  allinputs h-full relative flex justify-between px-3 items-center  bg-white cursor-pointer"
              : "incorrectInput h-full relative flex justify-between px-3 items-center  bg-white cursor-pointer"
            : "allinputs h-full relative flex justify-between px-3 items-center  bg-white cursor-pointer"
        }
        onClick={() => setshowSelection(!showSelection)}
        ref={selectRef}
      >
        <p
          className={`
                 ${selectedDegree.title === "" && "text-gray-500 "}
               `}
        >
          {selectedDegree.title === ""
            ? "აირჩიეთ ხარისხი"
            : selectedDegree.title}
        </p>
        <img src="/img/arrowIcon.svg" alt="arrowIcon" />
        <div
          className={`absolute top-[45px] left-0 w-full rounded-[4px] bg-white py-2  shadow-lg cursor-pointer z-30 ${
            showSelection ? "block" : "hidden"
          } `}
        >
          {degrees.map((degree) => {
            return (
              <p
                key={degree.id}
                className="py-[5px] px-3 hover:text-[#1A1A1A] hover:bg-[#C3DCEE]"
                onClick={() => {
                  setselectedDegree(degree);
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
