import {
  useDisclosure,
  ModalOverlay,
  ModalHeader,
  Modal,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import {
  Nav,
  Logo,
  ModalMain,
  ButtonPrimary,
  ButtonMode,
} from "./navbar.style";

interface Props {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: NextPage<Props> = ({ theme, toggleTheme }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Nav>
      <Logo>NFTCRAFT</Logo>
      <div>
        <ButtonMode
          background="transparent"
          fontSize={31}
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌚" : "☀️"}
        </ButtonMode>
        <ButtonPrimary onClick={onOpen}>Connect</ButtonPrimary>
      </div>
      {/* Connect Modal */}
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
    </Nav>
  );
};

export default Navbar;
