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
  console.log(name, description, distance, travel);

  return (
    <div className="text-tertiary flex flex-col">
      <h1 className="text-8xl font-sans mt-9">{name.toUpperCase()}</h1>
      <p className="w-96 font-serif text-lg mt-3">{description}</p>
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
