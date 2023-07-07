import Link from "next/link";

interface Props {
  href: string;
  active?: boolean;
}

const SlideItem = ({ href, active }: Props) => {
  return (
    <>
      <Link
        className={`h-4 w-4 rounded-full bg-gray-700 hover:bg-gray-400 max-sm:h-2 max-sm:w-2 ${
          active ? " bg-tertiary" : ""
        }`}
        href={href}
      ></Link>
    </>
  );
};

export default SlideItem;
