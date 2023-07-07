"use client";
import { barDestination } from "@/constants/navegation";
import { usePathname } from "next/navigation";
import React from "react";
import NavbarItem from "../NavbarItem";

const DestinationNavBar = () => {
  const path = usePathname();
  return (
    <div className="flex bg-opacity-10 justify-center items-start gap-12 h-9 max-sm:gap-6 max-sm:h-7">
      {barDestination.map((item) =>
        path === item.href ? (
          <NavbarItem
            key={item.name}
            name={item.name}
            number={item.number}
            href={item.href}
            active
          />
        ) : (
          <NavbarItem
            key={item.name}
            name={item.name}
            number={item.number}
            href={item.href}
          />
        )
      )}
    </div>
  );
};

export default DestinationNavBar;
