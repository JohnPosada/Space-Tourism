import Layout from "@/components/Layout";
import TitleSection from "@/components/TitleSection";
import CrewDescription from "@/components/crew/CrewDescription";
import CrewSlide from "@/components/crew/CrewSlide";
import { DataCrew } from "@/constants/data";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

const Destination = ({ params }: Props) => {
  const { id } = params;
  const activeCrew =
    DataCrew.find((crew) => crew.id === id.toUpperCase()) ?? DataCrew[0];

  return (
    <Layout section="crew">
      <div className="h-full w-full grid grid-cols-2 grid-rows-5">
        <div className="flex flex-col row-span-full pl-40 mt-20 gap-40">
          <TitleSection number="01" title="MEET YOUR CREW" />
          <div className="flex flex-col gap-20">
            <CrewDescription {...activeCrew} />
            <CrewSlide />
          </div>
        </div>
        <div className="row-span-full row-start-2 h-full w-full flex justify-center items-end">
          <Image
            src={activeCrew?.images.png}
            alt="Destination"
            height={445}
            width={445}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Destination;
