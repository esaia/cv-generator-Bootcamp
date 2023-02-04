import React from "react";

const Experience = () => {
  return (
    <div>
      <form className="flex flex-col gap-[40px] mb-10 pb-10 border-b-2 border-solid border-[#C1C1C1]">
        {/* თანამდებობა */}
        <div>
          <label htmlFor="">თანამდებობა</label>
          <input
            type="text"
            className="allinputs"
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
          />
          <span className="inputDesc">მინიმუმ 2 სიმბოლო</span>
        </div>

        {/* დამსაქმებელი */}

        <div>
          <label htmlFor="">დამსაქმებელი</label>
          <input type="text" className="allinputs" placeholder="დამსაქმებელი" />
          <span className="inputDesc">მინიმუმ 2 სიმბოლო</span>
        </div>

        {/* თარიღი */}
        <div className="flex justify-between">
          <div className="w-full mr-5">
            <label htmlFor="">დაწყების რიცხვი</label>
            <input type="date" className="allinputs" />
          </div>

          <div className="w-full ml-5">
            <label htmlFor="">დამთავრების რიცხვი</label>
            <input type="date" className="allinputs" />
          </div>
        </div>

        {/* chems shesaxeb */}

        <div>
          <label htmlFor="">აღწერა</label>
          <textarea
            type="text"
            className="allinputs h-[103px] pb-[0px]"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          />
        </div>
      </form>
    </div>
  );
};

export default Experience;
