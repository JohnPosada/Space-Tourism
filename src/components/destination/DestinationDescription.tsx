import React from "react";

interface Props {
  name: string;
  description: string;
  distance: string;
  travel: string;
}

const DestinationDescription = ({
  name,
  description,
  distance,
  travel,
}: Props) => {
  return (
    <div className="text-tertiary flex flex-col w-[500px] max-lg:items-center max-lg:w-auto">
      <h1 className="text-8xl font-sans mt-9 max-sm:text-6xl">
        {name.toUpperCase()}
      </h1>
      <p className=" text-secondary font-serif pb-10 border-b border-gray-700 text-lg mt-3 max-lg:text-base max-lg:text-center max-sm:w-auto">
        {description}
      </p>
      <div className="flex gap-20 mt-7 max-sm:flex-col max-sm:gap-6 max-sm:text-center">
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-sm text-secondary">AVG. DISTANCE</h3>
          <p className="font-sans text-3xl ">{distance}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-base text-secondary">
            EST. TRAVEL TIME
          </h3>
          <p className="font-sans text-3xl max-sm:text-center">{travel}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDescription;
