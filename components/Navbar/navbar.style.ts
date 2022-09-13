import styled from "styled-components";
import { Button, chakra } from "@chakra-ui/react";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

export const Logo = styled.h1`
  background: linear-gradient(
    90deg,
    #7c1dc1 0%,
    #eb54bc 18.58%,
    #0fb6ca 37.63%,
    #67d8de 52.96%,
    #02dc85 67.82%,
    #fcd757 88.72%
  );
  -webkit-background-clip: text;
  font-size: 1.75rem;
  font-weight: bold;
  background-clip: text;
  color: transparent;
`;

export const ButtonDrawer = chakra(Button, {
  baseStyle: {
    background: "primary",
    fontSize: "1rem",
    display: "none",
    _hover: {
      background: "primaryDark",
    },
    "@media (max-width: 600px)": {
      display: "inline-block",
    },
  },
});

export const ButtonPrimary = chakra(Button, {
  baseStyle: {
    background: "primary",
    color: "#fff",
    marginLeft: "1rem",
    _hover: {
      background: "primaryDark",
    },
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
});
