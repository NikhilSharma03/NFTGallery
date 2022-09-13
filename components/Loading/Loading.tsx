import type { NextPage } from "next";
import {
  LoadingModalContainer,
  LoadingModalOverlay,
  LoadingSpinner,
} from "./Loading.style";

type Props = {
  showModal: boolean;
};

const Loading: NextPage<Props> = ({ showModal }) => {
  return showModal ? (
    <LoadingModalContainer>
      <LoadingModalOverlay />
      <LoadingSpinner>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoadingSpinner>
    </LoadingModalContainer>
  ) : null;
};

export default Loading;
