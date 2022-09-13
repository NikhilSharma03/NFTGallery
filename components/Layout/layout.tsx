import type { NextPage } from "next";
import { useRef } from "react";
import { Main } from "./layout.style";
import Navbar from "./../Navbar/navbar";
import SideDrawer from "../SideDrawer/sideDrawer";
import { useDisclosure } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  theme: string;
  toggleTheme: () => void;
};

const Layout: NextPage<Props> = ({ children, theme, toggleTheme }) => {
  // SideDrawer methods
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        btnRef={btnRef}
        openSideDrawer={onOpen}
      />
      <Main>{children}</Main>
      <SideDrawer
        theme={theme}
        toggleTheme={toggleTheme}
        btnRef={btnRef}
        isSideDrawerOpen={isOpen}
        openSideDrawer={onOpen}
        closeSideDrawer={onClose}
      />
    </>
  );
};

export default Layout;
