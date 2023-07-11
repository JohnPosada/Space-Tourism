import Link from "next/link";

interface NavbarItemProps {
  name: string;
  href: string;
  number: string;
  active?: boolean;
}

const NavbarItem = ({ href, number, name, active }: NavbarItemProps) => {
  return (
    <>
      <Link
        className={`flex items-center justify-center gap-2 h-full hover:border-b-4 hover:border-gray-300 ${
          active ? " border-b-4 border-tertiary" : ""
        }`}
        href={href}
      >
        <span className="text-base font-serif tracking-[2px] font-bold max-sm:text-sm text-tertiary max-lg:hidden">
          {number}
        </span>
        <span className="text-base font-serif tracking-[2px] text-tertiary">
          {name}
        </span>
      </Link>
    </>
  );
};

export default NavbarItem;
