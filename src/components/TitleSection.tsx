import React from "react";

interface Props {
  number: string;
  title: string;
}

const TitleSection = ({ title, number }: Props) => {
  return (
    <div className="flex justify-start items-center gap-7 mt-4 text-white font-serif text-3xl">
      <h2 className="font-bold opacity-50">{number}</h2>
      <h2>{title}</h2>
    </div>
  );
};

export default TitleSection;
