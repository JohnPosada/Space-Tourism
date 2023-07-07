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
    <div className="text-tertiary flex flex-col max-sm:items-center">
      <h1 className="text-8xl font-sans mt-9 max-sm:text-7xl">
        {name.toUpperCase()}
      </h1>
      <p className="w-96 text-secondary font-serif text-lg mt-3 max-sm:text-center max-sm:w-auto">
        {description}
      </p>
      <hr className="text-tertiary opacity-60 mt-14" />
      <div className="flex gap-20 mt-7">
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-sm">AVG. DISTANCE</h3>
          <p className="font-sans text-3xl">{distance}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-sm">EST. TRAVEL TIME</h3>
          <p className="font-sans text-3xl">{travel}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDescription;
