import { ModalOverlay, Modal, ModalBody } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import { ModalMain, WalletCard, WalletHeading } from "./WalletModal.style";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal: NextPage<Props> = ({ isOpen, onClose }) => {
  // Connect Wallet Handler
  const onConnectWallet = () => {
    onClose();
  };

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalMain>
        <ModalBody padding="1rem">
          <WalletCard maxW="lg" borderRadius="lg" onClick={onConnectWallet}>
            <Image
              alt="metamask"
              src="/metamask.png"
              width={4000}
              height={4000}
            />
            <WalletHeading>Metamask</WalletHeading>
          </WalletCard>
        </ModalBody>
      </ModalMain>
    </Modal>
  );
};

export default WalletModal;
