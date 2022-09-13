import { useDisclosure } from "@chakra-ui/react";
import type { NextPage } from "next";
import WalletModal from "../WalletModal/WalletModal";
import { Nav, Logo, ButtonPrimary, ButtonDrawer } from "./Navbar.style";
import Link from "next/link";

type Props = {
  btnRef: any;
  openSideDrawer: () => void;
};

const Navbar: NextPage<Props> = ({ btnRef, openSideDrawer }) => {
  // Connect Wallet Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Nav>
      <Link href="/">
        <Logo>NFTCRAFT</Logo>
      </Link>
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
