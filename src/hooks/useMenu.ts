import { useState } from "react";

export const useMenu = () => {
  const [menuState, setMenuState] = useState(false);

  const openMenu = () => {
    setMenuState(true);
  };

  const closeMenu = () => {
    setMenuState(false);
  };

  return {
    menuState,
    openMenu,
    closeMenu,
  };
};
