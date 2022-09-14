import { useDisclosure } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { Nav, Logo, ButtonPrimary, ButtonDrawer } from "./Navbar.style";
import WalletModal from "../WalletModal/WalletModal";
import useAppSelector from "./../../hooks/useAppSelector";

type Props = {
  btnRef: any;
  openSideDrawer: () => void;
};

const Navbar: NextPage<Props> = ({ btnRef, openSideDrawer }) => {
  const isWalletConnected: boolean = useAppSelector(
    (state) => state.user.isWalletConnected
  );
  const userWalletAccount: string = useAppSelector(
    (state) => state.user.userWalletAccount
  );

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
        <ButtonPrimary onClick={onOpen}>
          {isWalletConnected ? userWalletAccount : "Connect Wallet"}
        </ButtonPrimary>
        {/* Connect Modal */}
        <WalletModal isOpen={isOpen} onClose={onClose} />
      </div>
    </Nav>
  );
};

export default Navbar;
