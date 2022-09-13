import {
  DrawerContent,
  DrawerCloseButton,
  Button,
  ModalContent,
  chakra,
} from "@chakra-ui/react";

export const SideDrawerContent = chakra(DrawerContent, {
  baseStyle: {
    background: "body",
  },
});

export const SideDrawerCloseButton = chakra(DrawerCloseButton, {
  baseStyle: {
    color: "text",
  },
});

export const SideDrawerButtonPrimary = chakra(Button, {
  baseStyle: {
    background: "primary",
    color: "#fff",
    display: "block",
    margin: "4rem auto",
    _hover: {
      background: "primaryDark",
    },
  },
});

export const SideDrawerModalMain = chakra(ModalContent, {
  baseStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) !important",
    margin: "0",
  },
});
