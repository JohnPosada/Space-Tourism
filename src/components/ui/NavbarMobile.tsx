"use client";

import Image from "next/image";
import Menu from "./Menu";
import { useMenu } from "@/hooks/useMenu";

const NavbarMobile = () => {
  const { menuState, closeMenu, openMenu } = useMenu();
  console.log(menuState);

  return (
    <>
      <div className="sm:hidden w-full p-6 flex justify-between items-center ">
        <Image
          src="/assets/shared/logo.svg"
          alt="Logo"
          width={48}
          height={48}
          priority
        />
        <Image
          className="cursor-pointer"
          src="/assets/shared/icon-hamburger.svg"
          alt="Menu"
          width={24}
          height={24}
          onClick={openMenu}
        />
        <Menu stateMenu={menuState} closeMenu={closeMenu} />
      </div>
    </>
  );
};

export default NavbarMobile;
