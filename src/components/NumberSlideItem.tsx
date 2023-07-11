import Link from "next/link";

interface Props {
  number: string;
  active?: boolean;
}

const NumberSlideItem = ({ number, active }: Props) => {
  return (
    <>
      <Link
        className={`h-20 w-20 flex justify-center border text-3xl border-gray-700 items-center rounded-full hover:border-tertiary max-lg:h-[60px] max-lg:w-[60px] max-sm:h-10 max-sm:w-10 ${
          active ? " border-tertiary bg-white text-black" : "text-white"
        }`}
        href={number}
      >
        <span className={`max-sm:text-base max-lg:text-xl`}>{number}</span>
      </Link>
    </>
  );
};

export default NumberSlideItem;
