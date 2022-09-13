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
} from "./SideDrawer.style";
import WalletModal from "../WalletModal/WalletModal";
import useAppSelector from "./../../hooks/useAppSelector";

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
  const isWalletConnected: boolean = useAppSelector(
    (state) => state.user.isWalletConnected
  );
  const userWalletAccount: string = useAppSelector(
    (state) => state.user.userWalletAccount
  );

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
            {isWalletConnected ? userWalletAccount : "Connect Wallet"}
          </SideDrawerButtonPrimary>
          {/* Connect Modal */}
          <WalletModal isOpen={isOpen} onClose={onClose} />
        </DrawerBody>
      </SideDrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
