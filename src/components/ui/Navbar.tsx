"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import NavbarItem from "../NavbarItem";
import { useRouter } from "next/router";

const barItems = [
  {
    name: "HOME",
    number: "00",
    href: "/",
  },
  {
    name: "DESTINATION",
    number: "01",
    href: "/destination",
  },
  {
    name: "CREW",
    number: "02",
    href: "/crew",
  },
  {
    name: "TECHNOLOGY",
    number: "03",
    href: "/technology",
  },
];

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="flex justify-between items-center  h-24 mt-10 ml-14">
      {/* <div className="flex justify-center items-center h-full">
        <hr className="w-[200px] bg-tertiary" />
      </div> */}
      <Image src="/assets/shared/logo.svg" alt="Logo" width={48} height={48} />
      <hr className="relative w-1/3 left-10" />
      <div className="flex bg-slate-100 bg-opacity-10 backdrop-blur-sm justify-center items-center gap-12 w-[830px] h-full">
        {barItems.map((item) =>
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
    </div>
  );
};

export default Navbar;
