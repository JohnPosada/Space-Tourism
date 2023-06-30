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
      <div className="h-full w-full grid grid-cols-2 grid-rows-5 place-items-center">
        <div className="flex flex-col row-span-full gap-24">
          <TitleSection number="00" title="PICK YOUR DESTINATION" />
          <Image
            className="ml-72"
            src={activeDestination?.images.png}
            alt="Destination"
            height={445}
            width={445}
          />
        </div>
        <div className="row-span-full">
          <DestinationNavBar />
          <DestinationDescription {...activeDestination} />
        </div>
      </div>
    </Layout>
  );
};

export default Destination;
