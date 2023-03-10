import React, { useEffect } from "react";
import useFormContext from "../hooks/useFormContext";

const Cv = () => {
  const { inputsData, setInputsData, photoData, setphotoData } =
    useFormContext();

  // convert File To base64 and save to localstorage
  useEffect(() => {
    if (inputsData.image?.size < 5000000) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(inputsData.image);
      fileReader.onload = (event) => {
        setphotoData(event.target.result);
      };
    } else {
      setphotoData(null);
    }
    if (photoData) {
      localStorage.setItem("photoData", photoData);
    }
  }, [photoData, inputsData.image]);

  // get base64 from localstorage and set to variable
  useEffect(() => {
    const storedPhotoData = localStorage.getItem("photoData");
    if (storedPhotoData) {
      setphotoData(storedPhotoData);
    }
  }, []);

  // convert base64 to file Type object and set inputData.image variable
  useEffect(() => {
    if (photoData) {
      const base64ToFile = new File(
        [
          Uint8Array.from(atob(photoData.split(",")[1]), (c) =>
            c.charCodeAt(0)
          ),
        ],
        "preview.jpeg",
        { type: photoData.split(",")[0].split(":")[1].split(";")[0] }
      );

      setInputsData({ ...inputsData, image: base64ToFile });
    }
  }, [photoData]);

  return (
    <div className="pb-20">
      <div className="absolute bottom-[44px] left-[78px]">
        <img className="w-[42px]" src="./img/cvicon.svg" alt="cvIcon" />
      </div>
      <p></p>

      {/* ჩემს შესახებ */}
      <div className="flex items-start py-[15px]   ">
        <div className=" flex flex-[60%] flex-col gap-5 ">
          <h2 className="text-[#F93B1D] text-[34px] font-bold">
            {inputsData.name + " " + inputsData.surname}
          </h2>

          <div>
            {inputsData.email && (
              <div className="flex gap-2 items-center pb-[3px]">
                <img src="./img/vectorEmail.svg" alt="icon" />
                <p>{inputsData.email}</p>
              </div>
            )}

            {inputsData.phone_number && (
              <div className="flex gap-2 items-center">
                <img src="./img/vectorPhone.svg" alt="icon" />
                <p>{inputsData.phone_number}</p>
              </div>
            )}
          </div>

          {inputsData.about_me && (
            <>
              <h3 className="cvTitles">ჩემს შესახებ</h3>
              <p>{inputsData.about_me}</p>
            </>
          )}
        </div>

        {/* Photo */}
        <div className=" w-[40%] min-w-[100px] h-full">
          {photoData && (
            <img
              src={`
              ${
                inputsData.image instanceof File &&
                URL.createObjectURL(inputsData.image)
              }
            `}
              alt="profile"
              className="aspect-square rounded-full object-cover w-full"
            />
          )}
        </div>
      </div>
      {/* გამოცდილება*/}

      {inputsData.experiences.map((experience, i) => {
        return (
          <div key={i}>
            {(experience.position ||
              experience.employer ||
              experience.description ||
              experience.start_date ||
              experience.due_date) && (
              <div className="flex flex-col gap-3 py-[20px] border-t-[1px] border-solid border-[#C8C8C8]">
                <h3 className="cvTitles">გამოცდილება</h3>

                <div>
                  {(experience.position || experience.employer) && (
                    <h4 className="font-helveticSemibold">
                      {experience.position}, {experience.employer}
                    </h4>
                  )}

                  {(experience.start_date || experience.due_date) && (
                    <p className="italic text-[#909090] font-thin">
                      {experience.start_date} - {experience.due_date}
                    </p>
                  )}
                </div>

                {experience.description && (
                  <p className="font-helvetic">{experience.description}</p>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* განათლება*/}

      {inputsData.educations.map((edu, i) => {
        return (
          <div key={i}>
            {(edu.institute ||
              edu.degree ||
              edu.due_date ||
              edu.description) && (
              <div className="flex flex-col gap-3 py-[20px] border-t-[1px] border-solid border-[#C8C8C8]">
                <h3 className="cvTitles">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h3>

                <div>
                  {(edu.institute || edu.degree) && (
                    <h4 className="font-helveticSemibold">
                      {edu.institute}, {edu.degree}
                    </h4>
                  )}

                  {edu.due_date && (
                    <p className="italic text-[#909090] font-thin">
                      {edu.due_date}
                    </p>
                  )}
                </div>

                {edu.description && <p>{edu.description}</p>}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Cv;
