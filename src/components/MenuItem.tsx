import Link from "next/link";

interface NavbarItemProps {
  name: string;
  href: string;
  number: string;
}

const MenuItem = ({ href, number, name }: NavbarItemProps) => {
  return (
    <>
      <Link className={"flex justify-center gap-3 h-full "} href={href}>
        <span className="text-lg font-serif tracking-[2px] font-bold text-tertiary">
          {number}
        </span>
        <span className="text-lg font-serif tracking-[2px] text-tertiary">
          {name}
        </span>
      </Link>
    </>
  );
};

export default MenuItem;
