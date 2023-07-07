import Layout from "@/components/Layout";
import TitleSection from "@/components/TitleSection";
import DestinationDescription from "@/components/destination/DestinationDescription";
import DestinationNavBar from "@/components/destination/DestinationNavbar";
import { DataDestinations } from "@/constants/data";
import Image from "next/image";
import React from "react";

interface Props {
  params: {
    id: "moon" | "mars" | "europa" | "titan";
  };
}

const Destination = ({ params }: Props) => {
  const { id } = params;
  const activeDestination =
    DataDestinations.find(
      (destination) => destination.name.toUpperCase() === id.toUpperCase()
    ) ?? DataDestinations[0];

  return (
    <Layout section="destination">
      <div className="h-full w-full grid grid-cols-2 grid-rows-5 place-items-center max-sm:flex max-sm:flex-col">
        <div className="flex flex-col items-center row-span-full gap-24 max-sm:gap-8">
          <TitleSection number="00" title="PICK YOUR DESTINATION" />
          <div className="w-[300px] h-[300px] ml-72 max-sm:ml-0 max-sm:w-44 max-sm:h-44">
            <Image
              className="w-full h-full"
              src={activeDestination?.images.png}
              alt="Destination"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        </div>
        <div className="row-span-full max-sm:p-5">
          <DestinationNavBar />
          <DestinationDescription {...activeDestination} />
        </div>
      </div>
    </Layout>
  );
};

export default Destination;
