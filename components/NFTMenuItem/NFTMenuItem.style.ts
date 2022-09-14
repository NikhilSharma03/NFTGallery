import { Box, chakra } from "@chakra-ui/react";
import styled from "styled-components";

export const NFTMenuItemContainer = chakra(Box, {
  baseStyle: {
    cursor: "pointer",
    marginRight: "2rem",
    transition: "all .3s",
    borderRadius: "5px",
    background: "#000",
    _last: {
      marginRight: "0",
    },
    _hover: {
      filter: "brightness(75%)",
    },
  },
});

export const NFTMenuItemImageContainer = chakra(Box, {
  baseStyle: {
    width: "15rem",
    height: "15rem",
    position: "relative",
    borderRadius: "5px",
    overflow: "hidden",
    "@media(max-width: 900px)": {
      width: "15rem",
      height: "20rem",
    },
  },
});

export const SelectedStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
