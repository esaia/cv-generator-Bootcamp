import React from "react";
import useFormContext from "../../hooks/useFormContext";

const Experience = ({ index }) => {
  const { inputsData, onChangeInput, validations } = useFormContext();
  return (
    <>
      <form className="flex flex-col gap-[40px] mb-10 pb-10 border-b-[1px] border-solid border-[#C1C1C1]">
        {/* თანამდებობა */}
        <div>
          <label
            className={
              inputsData.experiences[index].position &&
              !validations.experiences[index].position
                ? "text-[#E52F2F]"
                : ""
            }
          >
            თანამდებობა
          </label>

          <div className="inputsDiv">
            <input
              type="text"
              className={
                inputsData.experiences[index].position
                  ? validations.experiences[index].position
                    ? "correctInput "
                    : "incorrectInput"
                  : "allinputs"
              }
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              name="position"
              value={inputsData.experiences[index]?.position}
              onChange={(e) => onChangeInput(e, index)}
            />

            {inputsData.experiences[index]?.position && (
              <img
                src={
                  validations.experiences[index]?.position
                    ? "./img/correctIcon.svg"
                    : "./img/errorIcon.svg"
                }
                alt="successIcon"
                className={
                  validations.experiences[index]?.position
                    ? "correctIcon"
                    : "errorIcon"
                }
              />
            )}
          </div>

          <span className="inputDesc">მინიმუმ 2 სიმბოლო</span>
        </div>

        {/* დამსაქმებელი */}

        <div>
          <label
            className={
              inputsData.experiences[index].employer &&
              !validations.experiences[index].employer
                ? "text-[#E52F2F]"
                : ""
            }
          >
            დამსაქმებელი
          </label>

          <div className="inputsDiv">
            <input
              type="text"
              className={
                inputsData.experiences[index].employer
                  ? validations.experiences[index].employer
                    ? "correctInput "
                    : "incorrectInput"
                  : "allinputs"
              }
              placeholder="დამსაქმებელი"
              name="employer"
              value={inputsData.experiences[index]?.employer}
              onChange={(e) => onChangeInput(e, index)}
            />

            {inputsData.experiences[index]?.employer && (
              <img
                src={
                  validations.experiences[index]?.employer
                    ? "./img/correctIcon.svg"
                    : "./img/errorIcon.svg"
                }
                alt="successIcon"
                className={
                  validations.experiences[index]?.employer
                    ? "correctIcon"
                    : "errorIcon"
                }
              />
            )}
          </div>

          <span className="inputDesc">მინიმუმ 2 სიმბოლო</span>
        </div>

        {/* თარიღი */}
        <div className="flex justify-between">
          <div className="w-full mr-5">
            <label>დაწყების რიცხვი</label>
            <input
              type="date"
              className={
                inputsData.experiences[index].start_date
                  ? validations.experiences[index].start_date
                    ? "correctInput "
                    : "incorrectInput"
                  : "allinputs"
              }
              name="start_date"
              value={inputsData.experiences[index].start_date}
              onChange={(e) => onChangeInput(e, index)}
            />
          </div>

          <div className="w-full ml-5">
            <label>დამთავრების რიცხვი</label>
            <input
              type="date"
              className={
                inputsData.experiences[index].due_date
                  ? validations.experiences[index].due_date
                    ? "correctInput "
                    : "incorrectInput"
                  : "allinputs"
              }
              name="due_date"
              value={inputsData.experiences[index].due_date}
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
              inputsData.experiences[index].description
                ? validations.experiences[index].description
                  ? "correctInput "
                  : "incorrectInput"
                : "allinputs"
            }
             h-[103px] pb-[0px]
           `}
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            name="description"
            value={inputsData.experiences[index].description}
            onChange={(e) => onChangeInput(e, index)}
          />
        </div>
      </form>
    </>
  );
};

export default Experience;
