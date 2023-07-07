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
      <div className="pl-40 pt-20 max-sm:flex max-sm:p-0 max-sm:items-center max-sm:justify-center">
        <TitleSection number="03" title="MEET YOUR TECHNOLOGY" />
      </div>
      <div className="h-full w-full flex max-sm:flex-col-reverse max-sm:justify-center max-sm:items-center max-sm:gap-7">
        <div className="w-3/5 pl-40 pt-20 flex gap-16 max-sm:w-full max-sm:flex-col max-sm:p-0 max-sm:justify-center max-sm:items-center">
          <TechnologySlide />
          <TechnologyDescription {...activeTechnology} />
        </div>
        <div className="w-2/5 flex justify-end items-center max-sm:items-center max-sm:h-auto max-sm:w-full ">
          <div className="w-auto h-[515px] max-sm:w-full max-sm:h-44">
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
