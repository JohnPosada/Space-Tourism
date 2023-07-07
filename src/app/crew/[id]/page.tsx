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
      <div className="pl-40 pt-20 max-sm:flex max-sm:p-0 max-sm:items-center max-sm:justify-center">
        <TitleSection number="02" title="MEET YOUR CREW" />
      </div>
      <div className="h-full w-full flex max-sm:flex max-sm:flex-col-reverse max-sm:justify-center max-sm:gap-10">
        <div className="w-1/2 pl-40 pt-20 flex flex-col gap-20 max-sm:w-full max-sm:gap-0 max-sm:items-center max-sm:flex-col-reverse max-sm:p-0 ">
          <CrewDescription {...activeCrew} />
          <CrewSlide />
        </div>
        <div className="w-1/2 flex justify-center items-end max-sm:items-center max-sm:h-auto max-sm:w-full ">
          <div className="w-auto h-[500px] max-sm:ml-0 max-sm:w-auto max-sm:h-80">
            <Image
              className="w-auto h-full"
              src={activeCrew?.images.png}
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

export default Destination;
