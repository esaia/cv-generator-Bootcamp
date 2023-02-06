import React from "react";
import useFormContext from "../../hooks/useFormContext";

const PrivateInfo = () => {
  const { inputsData, onChangeInput, validations, firstButtonClicked } =
    useFormContext();

  return (
    <div>
      <form className="flex flex-col gap-[40px]">
        {/* სახელი & გვარი */}
        <div className="flex justify-between ">
          <div className="mr-6 w-full">
            <label
              className={
                inputsData.name && !validations.name ? "text-[#E52F2F]" : ""
              }
            >
              სახელი
            </label>

            <div className="inputsDiv">
              <input
                type="text"
                className={
                  inputsData.name
                    ? validations.name
                      ? "correctInput "
                      : "incorrectInput"
                    : firstButtonClicked
                    ? "incorrectInput"
                    : "allinputs"
                }
                placeholder="ანზორ"
                name="name"
                value={inputsData.name}
                onChange={(e) => onChangeInput(e)}
              />

              {inputsData.name && (
                <img
                  src={
                    validations.name
                      ? "./img/correctIcon.svg"
                      : "./img/errorIcon.svg"
                  }
                  alt="successIcon"
                  className={validations.name ? "correctIcon" : "errorIcon"}
                />
              )}
            </div>

            <span className="inputDesc">მინიმუმ 2 ასო, ქართული ასოები</span>
          </div>

          <div className="ml-6 w-full">
            <label
              className={
                inputsData.surname && !validations.surname
                  ? "text-[#E52F2F]"
                  : ""
              }
            >
              გვარი
            </label>

            <div className="inputsDiv">
              <input
                type="text"
                className={
                  inputsData.surname
                    ? validations.surname
                      ? "correctInput "
                      : "incorrectInput"
                    : firstButtonClicked
                    ? "incorrectInput"
                    : "allinputs"
                }
                placeholder="მუმლაძე"
                name="surname"
                value={inputsData.surname}
                onChange={(e) => onChangeInput(e)}
              />

              {inputsData.surname && (
                <img
                  src={
                    validations.surname
                      ? "./img/correctIcon.svg"
                      : "./img/errorIcon.svg"
                  }
                  alt="successIcon"
                  className={validations.surname ? "correctIcon" : "errorIcon"}
                />
              )}
            </div>

            <span className="inputDesc">მინიმუმ 2 ასო, ქართული ასოები</span>
          </div>
        </div>
        {/* ფოტოს ატვირთვა */}
        <div className="flex gap-3 items-center">
          <p>პირადი ფოტოს ატვირთვა</p>
          <label
            htmlFor="profile"
            className="bg-[#0E80BF] text-white px-[19px] py-[4px] cursor-pointer rounded-[4px]"
          >
            ატვირთვა
          </label>
          <input
            type="file"
            id="profile"
            name="image"
            // value={inputsData.image}
            onChange={(e) => onChangeInput(e)}
            hidden
          />
        </div>
        {/* ჩემს შესახებ */}
        <div>
          <label>ჩემს შესახებ (არასავალდებულო)</label>
          <textarea
            type="text"
            className={` ${
              inputsData.about_me ? "correctInput" : "allinputs"
            } h-[103px] pb-[0px]`}
            placeholder="ზოგადი ინფო შენ შესახებ"
            name="about_me"
            value={inputsData.about_me}
            onChange={(e) => onChangeInput(e)}
          />
        </div>
        {/* ელ-ფოსტა */}
        <div>
          <label
            className={
              inputsData.email && !validations.email ? "text-[#E52F2F]" : ""
            }
          >
            ელ.ფოსტა
          </label>

          <div className="inputsDiv">
            <input
              type="text"
              className={
                inputsData.email
                  ? validations.email
                    ? "correctInput "
                    : "incorrectInput"
                  : firstButtonClicked
                  ? "incorrectInput"
                  : "allinputs"
              }
              placeholder="anzorr666@redberry.ge"
              name="email"
              value={inputsData.email}
              onChange={(e) => onChangeInput(e)}
            />

            {inputsData.email && (
              <img
                src={
                  validations.email
                    ? "./img/correctIcon.svg"
                    : "./img/errorIcon.svg"
                }
                alt="successIcon"
                className={validations.email ? "correctIcon" : "errorIcon"}
              />
            )}
          </div>

          <span className="inputDesc">უნდა მთავრდებოდეს @redberry.ge-ით</span>
        </div>
        {/* ნომერი */}
        <div>
          <label
            className={
              inputsData.phone_number && !validations.phone_number
                ? "text-[#E52F2F]"
                : ""
            }
          >
            მობილურის ნომერი
          </label>

          <div className="inputsDiv">
            <input
              type="text"
              className={
                inputsData.phone_number
                  ? validations.phone_number
                    ? "correctInput "
                    : "incorrectInput"
                  : firstButtonClicked
                  ? "incorrectInput"
                  : "allinputs"
              }
              placeholder="+995 551 12 34 56"
              name="phone_number"
              value={inputsData.phone_number}
              onChange={(e) => onChangeInput(e)}
            />

            {inputsData.phone_number && (
              <img
                src={
                  validations.phone_number
                    ? "./img/correctIcon.svg"
                    : "./img/errorIcon.svg"
                }
                alt="successIcon"
                className={
                  validations.phone_number ? "correctIcon" : "errorIcon"
                }
              />
            )}
          </div>

          <span className="inputDesc">
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </span>
        </div>
      </form>
    </div>
  );
};

export default PrivateInfo;
