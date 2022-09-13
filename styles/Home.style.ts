import { Button, chakra, Heading } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div`
  height: 91vh;
  width: 100%;
  overflow: hidden;
`;

export const HeroContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 5rem;
`;

export const HeroHeading = chakra(Heading, {
  baseStyle: {
    color: "text",
    textAlign: "center",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
});

export const HeroButton = chakra(Button, {
  baseStyle: {
    background: "primary",
    fontSize: "1rem",
    color: "text",
    marginTop: "2rem",
    _hover: {
      background: "primaryDark",
    },
  },
});

export const ImageContainer = styled.div`
  transform: translateY(6rem);
`;
