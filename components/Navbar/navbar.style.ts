import styled from "styled-components";
import { ModalContent, Button } from "@chakra-ui/react";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
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

export const ButtonMode = styled(Button)`
  background: transparent;
  font-size: 2rem;

  &:hover {
    background: transparent;
  }
`;

export const ButtonPrimary = styled(Button)`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  margin-left: 1rem;

  &:hover {
    background: ${({ theme }) => theme.primaryDark};
  }
`;

export const ModalMain = styled(ModalContent)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  margin: 0;
`;
