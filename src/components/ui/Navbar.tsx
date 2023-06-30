"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import NavbarItem from "../NavbarItem";
import { barItems } from "@/constants/navegation";

const Navbar = () => {
  const path = usePathname();
  const pathname = path === "/" ? "HOME" : path.split("/")[1].toUpperCase();

  return (
    <div className="flex justify-between items-center  h-24  ml-14">
      <Image
        src="/assets/shared/logo.svg"
        alt="Logo"
        width={48}
        height={48}
        priority
      />
      <hr className="relative w-1/3 left-10 opacity-50" />
      <div className="flex bg-slate-100 bg-opacity-10 backdrop-blur-sm justify-center items-center gap-12 w-[830px] h-full">
        {barItems.map((item) =>
          pathname === item.name ? (
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
    </div>
  );
};

export default Navbar;
