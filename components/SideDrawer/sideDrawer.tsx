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
  SideDrawerButtonMode,
  SideDrawerButtonPrimary,
} from "./sideDrawer.style";
import WalletModal from "../WalletModal/walletModal";

interface Props {
  btnRef: any;
  isSideDrawerOpen: boolean;
  openSideDrawer: any;
  closeSideDrawer: any;
  theme: string;
  toggleTheme: () => void;
}

const SideDrawer: NextPage<Props> = ({
  btnRef,
  isSideDrawerOpen,
  closeSideDrawer,
  theme,
  toggleTheme,
}) => {
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
          <SideDrawerButtonMode
            background="transparent"
            fontSize={31}
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌚" : "☀️"}
            <span>{theme === "light" ? "Dark" : "Light"}</span>
          </SideDrawerButtonMode>

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
