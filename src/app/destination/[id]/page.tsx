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
      <div className="pl-40 pt-20 max-lg:pt-9 max-lg:pl-9 max-lg:justify-start max-lg:flex max-sm:p-0 max-sm:items-center max-sm:justify-center">
        <TitleSection number="01" title="PICK YOUR DESTINATION" />
      </div>
      <div className="h-full w-full pt-12 flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:pt-4 max-sm:gap-3 max-lg:gap-9">
        <div className="w-1/2 h-full flex justify-end items-center pb-10 max-lg:justify-center max-sm:p-0 max-lg:h-auto">
          <div className="w-[445px] h-[445px]  max-lg:ml-0 max-lg:w-[300px] max-lg:h-[300px] max-sm:w-44 max-sm:h-44">
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
        <div className="flex flex-col justify-start pl-16 h-full w-1/2 max-lg:w-full max-lg:px-24 max-sm:px-5">
          <DestinationNavBar />
          <DestinationDescription {...activeDestination} />
        </div>
      </div>
    </Layout>
  );
};

export default Destination;
