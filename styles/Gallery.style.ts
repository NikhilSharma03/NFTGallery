// import { Button, chakra, Heading } from "@chakra-ui/react";/
import styled from "styled-components";

export const Container = styled.div`
  height: 91vh;
  width: 100%;
  overflow: hidden;
`;

export const NFTMenu = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 1.5rem;
  margin-top: 4rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.gray};
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.primary};
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );

    &:hover {
      background-color: ${({ theme }) => theme.primaryDark};
    }
  }

  @media (max-width: 1100px) {
    width: 90%;
  }
`;
