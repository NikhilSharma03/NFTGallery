import { useDisclosure } from "@chakra-ui/react";
import type { NextPage } from "next";
import WalletModal from "../WalletModal/walletModal";
import { Nav, Logo, ButtonPrimary, ButtonDrawer } from "./navbar.style";

type Props = {
  btnRef: any;
  openSideDrawer: () => void;
};

const Navbar: NextPage<Props> = ({ btnRef, openSideDrawer }) => {
  // Connect Wallet Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Nav>
      <Logo>NFTCRAFT</Logo>
      <div>
        <ButtonDrawer ref={btnRef} colorScheme="teal" onClick={openSideDrawer}>
          ☰
        </ButtonDrawer>
        <ButtonPrimary onClick={onOpen}>Connect</ButtonPrimary>
        {/* Connect Modal */}
        <WalletModal isOpen={isOpen} onClose={onClose} />
      </div>
    </Nav>
  );
};

export default Navbar;
