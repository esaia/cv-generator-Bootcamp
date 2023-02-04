import React from "react";
import useFormContext from "../../hooks/useFormContext";

const Experience = ({ index }) => {
  const { inputsData, onChangeInput } = useFormContext();
  return (
    <>
      <form className="flex flex-col gap-[40px] mb-10 pb-10 border-b-[1px] border-solid border-[#C1C1C1]">
        {/* თანამდებობა */}
        <div>
          <label htmlFor="">თანამდებობა</label>
          <input
            type="text"
            className="allinputs"
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
            name="position"
            value={inputsData.experiences[index].position}
            onChange={(e) => onChangeInput(e, index)}
          />
          <span className="inputDesc">მინიმუმ 2 სიმბოლო</span>
        </div>

        {/* დამსაქმებელი */}

        <div>
          <label htmlFor="">დამსაქმებელი</label>
          <input
            type="text"
            className="allinputs"
            placeholder="დამსაქმებელი"
            name="employer"
            value={inputsData.experiences[index].employer}
            onChange={(e) => onChangeInput(e, index)}
          />
          <span className="inputDesc">მინიმუმ 2 სიმბოლო</span>
        </div>

        {/* თარიღი */}
        <div className="flex justify-between">
          <div className="w-full mr-5">
            <label htmlFor="">დაწყების რიცხვი</label>
            <input
              type="date"
              className="allinputs"
              name="start_date"
              value={inputsData.experiences[index].start_date}
              onChange={(e) => onChangeInput(e, index)}
            />
          </div>

          <div className="w-full ml-5">
            <label htmlFor="">დამთავრების რიცხვი</label>
            <input
              type="date"
              className="allinputs"
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
            className="allinputs h-[103px] pb-[0px]"
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
