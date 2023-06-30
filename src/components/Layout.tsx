import { clsx } from "clsx";
import React from "react";
import Navbar from "./ui/Navbar";

interface Props {
  section: "home" | "destination" | "crew" | "tecnology";
  children: React.ReactNode;
}

const Layout = ({ section, children }: Props) => {
  const bgStyles = {
    home: "bg-home-mobile sm:bg-home-desktop",
    destination: "bg-destination-mobile sm:bg-destination-desktop",
    crew: "bg-crew-mobile sm:bg-crew-desktop",
    tecnology: "bg-tecnology-mobile sm:bg-tecnology-desktop",
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
