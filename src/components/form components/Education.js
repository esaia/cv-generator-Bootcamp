import React from "react";
import useFormContext from "../../hooks/useFormContext";

const Education = ({ index }) => {
  const { inputsData, onChangeInput } = useFormContext();

  return (
    <div>
      <form className="flex flex-col gap-[40px] mb-10 pb-10 border-b-[1px] border-solid border-[#C1C1C1]">
        {/* სასწავლებელი */}
        <div>
          <label htmlFor="">სასწავლებელი</label>
          <input
            type="text"
            className="allinputs"
            placeholder="სასწავლებელი"
            name="institute"
            value={inputsData.educations[index].institute}
            onChange={(e) => onChangeInput(e, index)}
          />
          <span className="inputDesc">მინიმუმ 2 სიმბოლო</span>
        </div>

        {/* ხარისხი & თარიღი */}
        <div className="flex justify-between">
          <div className="w-full mr-5 flex flex-col">
            <label htmlFor="cars">ხარისხი</label>
            <select className="allinputs" name="degree" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
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
