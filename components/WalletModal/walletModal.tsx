import {
  ModalOverlay,
  ModalHeader,
  Modal,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { ModalMain } from "./walletModal.style";

interface Props {
  isOpen: boolean;
  onClose: any;
}

const WalletModal: NextPage<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalMain>
        <ModalHeader>Connect</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <h1>Body</h1>
        </ModalBody>
      </ModalMain>
    </Modal>
  );
};

export default WalletModal;
