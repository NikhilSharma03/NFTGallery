import { Box, chakra, Heading } from "@chakra-ui/react";

export const SelectedNFTContainer = chakra(Box, {
  baseStyle: {
    cursor: "pointer",
    background: "#000",
    margin: "0 auto",
    width: "25rem",
    marginTop: "3rem",
    borderRadius: "5px",
    border: "2px solid #ccc",
  },
});

export const SelectedNFTImageContainer = chakra(Box, {
  baseStyle: {
    width: "100%",
    height: "25rem",
    position: "relative",
    borderRadius: "5px",
    overflow: "hidden",
    "@media(max-width: 900px)": {
      width: "15rem",
      height: "20rem",
    },
  },
});

export const SelectedNFTHeading = chakra(Heading, {
  baseStyle: {
    padding: "1rem",
    color: "text",
    fontSize: "1.5rem !important",
    textAlign: "center",
  },
});
