import type { NextPage } from "next";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogContent,
} from "@chakra-ui/react";

type Props = {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  cancelRef: any;
};

const Alert: NextPage<Props> = ({ message, isOpen, onClose, cancelRef }) => {
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent background="primary">
        <AlertDialogHeader color="text">Alert</AlertDialogHeader>
        <AlertDialogCloseButton color="text" />
        <AlertDialogBody
          color="text"
          background="body"
          paddingY="14"
          textAlign="center"
        >
          {message}
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
