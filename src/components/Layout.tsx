import { clsx } from "clsx";
import React from "react";
import Navbar from "./ui/Navbar";

interface Props {
  section: "home" | "destination" | "crew" | "technology";
  children: React.ReactNode;
}

const Layout = ({ section, children }: Props) => {
  const bgStyles = {
    home: "max-sm:bg-home-mobile bg-home-desktop",
    destination: "max-sm:bg-destination-mobile sm:bg-destination-desktop",
    crew: "max-sm:bg-crew-mobile sm:bg-crew-desktop",
    technology: "max-sm:bg-technology-mobile sm:bg-technology-desktop",
  };
  return (
    <div
      className={clsx("bg-cover h-full pt-10 flex flex-col", bgStyles[section])}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
