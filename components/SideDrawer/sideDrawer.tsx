import type { NextPage } from "next";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";

import {
  SideDrawerContent,
  SideDrawerCloseButton,
  SideDrawerButtonPrimary,
} from "./sideDrawer.style";
import WalletModal from "../WalletModal/walletModal";

type Props = {
  btnRef: any;
  isSideDrawerOpen: boolean;
  openSideDrawer: () => void;
  closeSideDrawer: () => void;
};

const SideDrawer: NextPage<Props> = ({
  btnRef,
  isSideDrawerOpen,
  closeSideDrawer,
}) => {
  // Connect Wallet Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Drawer
      isOpen={isSideDrawerOpen}
      placement="left"
      onClose={closeSideDrawer}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <SideDrawerContent>
        <SideDrawerCloseButton />
        <DrawerHeader></DrawerHeader>
        <DrawerBody>
          <SideDrawerButtonPrimary onClick={onOpen}>
            Connect Wallet
          </SideDrawerButtonPrimary>
          {/* Connect Modal */}
          <WalletModal isOpen={isOpen} onClose={onClose} />
        </DrawerBody>
      </SideDrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
