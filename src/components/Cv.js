import React from "react";

const Cv = () => {
  return (
    <>
      <div className="absolute bottom-[44px] left-[78px]">
        <img className="w-[42px]" src="./img/cvicon.svg" alt="cvIcon" />
      </div>

      {/* ჩემს შესახებ */}
      <div className="flex  py-[20px]">
        <div className="flex flex-col gap-5">
          <h2 className="text-[#F93B1D] text-[34px] font-bold">
            ანზორ მუმლაძე
          </h2>

          <div>
            <div className="flex gap-2 items-center pb-[3px]">
              <img src="./img/vectorEmail.svg" alt="icon" />
              <p>anzorr666@redberry.ge</p>
            </div>

            <div className="flex gap-2 items-center">
              <img src="./img/vectorPhone.svg" alt="icon" />
              <p>anzorr666@redberry.ge</p>
            </div>
          </div>

          <h3 className="cvTitles">ჩემს შესახებ</h3>
          <p>
            ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები
            გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.
          </p>
        </div>

        <div className="w-full">
          <img
            src="./img/profile.png"
            alt="profile"
            className="w-[246px] rounded-full object-cover"
          />
        </div>
      </div>
      {/* გამოცდილება*/}

      <div className="flex flex-col gap-3 py-[20px] border-t-[1px] border-solid border-[#C8C8C8]">
        <h3 className="cvTitles">გამოცდილება</h3>

        <div>
          <h4 className="font-helveticSemibold">
            React Native Developer, Microsoft
          </h4>
          <p className="italic text-[#909090] font-thin">
            2020-09-23 - 2020-09-23
          </p>
        </div>

        <p className="font-helvetic">
          Experienced Javascript Native Developer with 5 years in the industry.
          proficient withreact. Used problem-solving aptitude to encahge
          application performance by 14%.created data visualisation tools and
          integrated designs.
        </p>
      </div>
      {/* განათლება*/}

      <div className="flex flex-col gap-3 py-[20px] border-t-[1px] border-solid border-[#C8C8C8]">
        <h3 className="cvTitles">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h3>

        <div>
          <h4 className="font-helveticSemibold">
            წმ. ანდრიას საპატრიარქოს სასწავლებელი, სტუდენტი
          </h4>
          <p className="italic text-[#909090] font-thin">2020-09-09</p>
        </div>

        <p>
          ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი.
          კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე.
          მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და
          ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?
        </p>
      </div>
    </>
  );
};

export default Cv;
