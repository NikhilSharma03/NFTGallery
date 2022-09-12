import styled from "styled-components";
import { Box, Heading, ModalContent } from "@chakra-ui/react";

export const ModalMain = styled(ModalContent)`
  background: ${({ theme }) => theme.body};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  margin: 0;
`;

export const WalletCard = styled(Box)`
  border-width: 1px;
  overflow: hidden;
  height: 50vh;
  padding: 2rem;
  position: relative;
  cursor: pointer;
`;

export const WalletHeading = styled(Heading)`
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-top: 2rem;
`;
