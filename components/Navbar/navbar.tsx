import { useDisclosure } from "@chakra-ui/react";
import type { NextPage } from "next";
import WalletModal from "../WalletModal/walletModal";
import {
  Nav,
  Logo,
  ButtonPrimary,
  ButtonMode,
  ButtonDrawer,
} from "./navbar.style";

interface Props {
  theme: string;
  btnRef: any;
  openSideDrawer: any;
  toggleTheme: () => void;
}

const Navbar: NextPage<Props> = ({
  theme,
  toggleTheme,
  btnRef,
  openSideDrawer,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Nav>
      <Logo>NFTCRAFT</Logo>
      <div>
        <ButtonDrawer ref={btnRef} colorScheme="teal" onClick={openSideDrawer}>
          ☰
        </ButtonDrawer>
        <ButtonMode
          background="transparent"
          fontSize={31}
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌚" : "☀️"}
        </ButtonMode>
        <ButtonPrimary onClick={onOpen}>Connect</ButtonPrimary>
        {/* Connect Modal */}
        <WalletModal isOpen={isOpen} onClose={onClose} />
      </div>
    </Nav>
  );
};

export default Navbar;
