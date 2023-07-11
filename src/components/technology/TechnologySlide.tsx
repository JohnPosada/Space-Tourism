"use client";

import { slideCrew } from "@/constants/navegation";
import { usePathname } from "next/navigation";
import NumberSlideItem from "../NumberSlideItem";

const TechnologySlide = () => {
  const path = usePathname();
  const id = path.split("/")[2];

  return (
    <div className="flex flex-col gap-6 max-lg:flex-row">
      {["1", "2", "3"].map((item) =>
        id === item ? (
          <NumberSlideItem key={item} number={item} active />
        ) : (
          <NumberSlideItem key={item} number={item} />
        )
      )}
    </div>
  );
};

export default TechnologySlide;
