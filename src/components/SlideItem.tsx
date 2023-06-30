import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  active?: boolean;
}

const SlideItem = ({ href, active }: Props) => {
  return (
    <>
      <Link
        className={`h-4 w-4 rounded-full bg-gray-700 hover:bg-gray-400 ${
          active ? " bg-tertiary" : ""
        }`}
        href={href}
      ></Link>
    </>
  );
};

export default SlideItem;
