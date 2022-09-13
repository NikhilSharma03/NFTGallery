import { useRef, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  ModalOverlay,
  Modal,
  ModalBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { ModalMain, WalletCard, WalletHeading } from "./WalletModal.style";
import useAppDispatch from "./../../hooks/useAppDispatch";
import useAppSelector from "./../../hooks/useAppSelector";
import { connectWallet } from "../../redux/action/user";
import { clearUserError, disconnectWallet } from "../../redux/reducer/user";
import Alert from "./../Alert/Alert";
import Loading from "../Loading/Loading";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const WalletModal: NextPage<Props> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");

  const isWalletConnected: boolean = useAppSelector(
    (state) => state.user.isWalletConnected
  );
  const loading: boolean = useAppSelector((state) => state.user.loading);

  const dispatch = useAppDispatch();
  const onConnectWallet = () => dispatch(connectWallet());
  const onDisconnectWallet = () => dispatch(disconnectWallet());
  const onClearUserError = () => dispatch(clearUserError());

  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();
  const alertCancelRef = useRef();

  const onConnectWalletHandler = async () => {
    onClose();
    if (isWalletConnected) {
      setMessage("Wallet already Connected!");
      onAlertOpen();
      return;
    }
    const { payload } = await onConnectWallet();
    if (payload?.startsWith("Failed")) {
      setMessage(payload);
      onAlertOpen();
    }
  };

  const onAlertCloseHandler = () => {
    setMessage("");
    onClearUserError();
    onAlertClose();
  };

  const onDisconnectWalletHandler = () => {
    onClose();
    onDisconnectWallet();
  };

  return (
    <>
      <Loading showModal={loading} />
      <Alert
        message={message}
        cancelRef={alertCancelRef}
        isOpen={isAlertOpen}
        onClose={onAlertCloseHandler}
      />
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalMain>
          <ModalBody padding="1rem">
            <WalletCard
              maxW="lg"
              borderRadius="lg"
              onClick={onConnectWalletHandler}
            >
              <Image
                alt="metamask"
                src="/metamask.png"
                width={4000}
                height={4000}
              />
              <WalletHeading>Metamask</WalletHeading>
            </WalletCard>
            {isWalletConnected && (
              <Button
                background="primary"
                color="text"
                marginTop="4"
                onClick={onDisconnectWalletHandler}
              >
                Disconnect Wallet
              </Button>
            )}
          </ModalBody>
        </ModalMain>
      </Modal>
    </>
  );
};

export default WalletModal;
