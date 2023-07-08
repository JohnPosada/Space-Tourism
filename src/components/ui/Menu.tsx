import { barItems } from "@/constants/navegation";
import Image from "next/image";
import MenuItem from "../MenuItem";

interface Props {
  stateMenu: boolean;
  closeMenu: () => void;
}

const Menu = ({ stateMenu, closeMenu }: Props) => {
  return (
    <div
      className={`${
        stateMenu ? "fixed" : "hidden"
      } backdrop-blur-3xl h-screen w-2/3 font-extrabold top-0 right-0 px-6`}
    >
      <div className="w-full py-8 flex justify-end items-center">
        <Image
          className="cursor-pointer"
          onClick={closeMenu}
          src="/assets/shared/icon-close.svg"
          alt="Close"
          width={24}
          height={24}
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-8">
        {barItems.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
