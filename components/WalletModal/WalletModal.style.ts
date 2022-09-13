import { Box, Heading, ModalContent, chakra } from "@chakra-ui/react";

export const ModalMain = chakra(ModalContent, {
  baseStyle: {
    background: "body",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) !important",
    margin: "0",
  },
});

export const WalletCard = chakra(Box, {
  baseStyle: {
    borderWidth: "1px",
    borderColor: "grey",
    overflow: "hidden",
    height: "50vh",
    padding: "2rem",
    position: "relative",
    cursor: "pointer",
  },
});

export const WalletHeading = chakra(Heading, {
  baseStyle: {
    color: "text",
    textAlign: "center",
    marginTop: "2rem",
  },
});
