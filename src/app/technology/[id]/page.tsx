import Layout from "@/components/Layout";
import TitleSection from "@/components/TitleSection";
import TechnologyDescription from "@/components/technology/TechnologyDescription";
import TechnologySlide from "@/components/technology/TechnologySlide";
import { DataTechnology } from "@/constants/data";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

const Technology = ({ params }: Props) => {
  const { id } = params;
  const activeTechnology =
    DataTechnology.find((technology) => technology.id === id.toUpperCase()) ??
    DataTechnology[0];

  return (
    <Layout section="technology">
      <div className="pl-40 pt-20 max-lg:pt-9 max-lg:pl-9 max-lg:justify-start max-lg:flex max-sm:p-0 max-sm:items-center max-sm:justify-center">
        <TitleSection number="03" title="SPACE LAUNCH 101" />
      </div>
      <div className="h-full w-full flex max-lg:flex-col-reverse max-lg:justify-center max-lg:items-center max-sm:gap-7 max-lg:gap-9">
        <div className="w-3/5 pl-40 pt-20 flex gap-16 max-lg:w-full max-lg:gap-7 max-sm:gap-3 max-lg:flex-col max-lg:p-0 max-lg:justify-center max-lg:items-center">
          <TechnologySlide />
          <TechnologyDescription {...activeTechnology} />
        </div>
        <div className="w-2/5 flex justify-end items-center max-sm:items-center max-sm:h-auto max-lg:w-full ">
          <div className="w-auto h-[515px] max-sm:w-full max-lg:h-80 max-sm:h-44">
            <Image
              className="w-full h-full"
              src={activeTechnology?.images.landscape}
              alt="Destination"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Technology;
