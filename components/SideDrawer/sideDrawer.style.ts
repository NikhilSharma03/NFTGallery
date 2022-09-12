import styled from "styled-components";
import {
  DrawerContent,
  DrawerCloseButton,
  Button,
  ModalContent,
} from "@chakra-ui/react";

export const SideDrawerContent = styled(DrawerContent)`
  background: ${({ theme }) => theme.body};
`;

export const SideDrawerCloseButton = styled(DrawerCloseButton)`
  color: ${({ theme }) => theme.text};
`;

export const SideDrawerButtonMode = styled(Button)`
  display: block;
  margin-bottom: 2rem;
  background: transparent;
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  padding: 0;
  span {
    font-size: 1.25rem;
    margin-left: 1rem;
  }

  &:hover {
    background: transparent;
  }
`;

export const SideDrawerButtonPrimary = styled(Button)`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  display: block;

  &:hover {
    background: ${({ theme }) => theme.primaryDark};
  }
`;

export const SideDrawerModalMain = styled(ModalContent)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  margin: 0;
`;
