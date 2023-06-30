"use client";

import { slideCrew } from "@/constants/navegation";
import React from "react";
import SlideItem from "../SlideItem";
import { usePathname } from "next/navigation";

const CrewSlide = () => {
  const path = usePathname();
  return (
    <div className="flex gap-6">
      {slideCrew.map((item) =>
        path === item.href ? (
          <SlideItem key={item.href} href={item.href} active />
        ) : (
          <SlideItem key={item.href} href={item.href} />
        )
      )}
    </div>
  );
};

export default CrewSlide;
