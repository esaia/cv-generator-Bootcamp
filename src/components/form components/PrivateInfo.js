import React from "react";

const PrivateInfo = () => {
  return (
    <div>
      <form className="flex flex-col gap-[40px]">
        {/* სახელი & გვარი */}

        <div className="flex  ">
          <div className="mr-6">
            <label htmlFor="">სახელი</label>
            <input type="text" className="allinputs" placeholder="ანზორ" />
            <span className="inputDesc">მინიმუმ 2 ასო, ქართული ასოები</span>
          </div>

          <div className="ml-6">
            <label htmlFor="">გვარი</label>
            <input type="text" className="allinputs" placeholder="მუმლაძე" />
            <span className="inputDesc">მინიმუმ 2 ასო, ქართული ასოები</span>
          </div>
        </div>

        {/* ფოტოს ატვირთვა */}

        <div className=" flex gap-3 items-center">
          <p>პირადი ფოტოს ატვირთვა</p>
          <label
            htmlFor="profile"
            className="bg-[#0E80BF] text-white px-[19px] py-[4px] cursor-pointer rounded-[4px]"
          >
            ატვირთვა
          </label>
          <input type="file" id="profile" hidden />
        </div>

        {/* ჩემს შესახებ */}

        <div>
          <label htmlFor="">ჩემს შესახებ (არასავალდებულო)</label>
          <textarea
            type="text"
            className="allinputs h-[103px] pb-[0px]"
            placeholder="ზოგადი ინფო შენ შესახებ"
          />
        </div>

        {/* ელ-ფოსტა */}

        <div>
          <label htmlFor="">ელ.ფოსტა</label>
          <input
            type="text"
            className="allinputs"
            placeholder="anzorr666@redberry.ge"
          />
          <span className="inputDesc">უნდა მთავრდებოდეს @redberry.ge-ით</span>
        </div>

        {/* ნომერი */}

        <div>
          <label htmlFor="">მობილურის ნომერი</label>
          <input
            type="text"
            className="allinputs"
            placeholder="+995 551 12 34 56"
          />
          <span className="inputDesc">
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </span>
        </div>
      </form>
    </div>
  );
};

export default PrivateInfo;
