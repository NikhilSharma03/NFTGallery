import type { NextPage } from "next";
import Image from "next/image";
import {
  SelectedNFTContainer,
  SelectedNFTImageContainer,
  SelectedNFTHeading,
} from "./SelectedNFT.style";

type Props = {
  name: string;
  image: string;
};

const SelectedNFT: NextPage<Props> = ({ image, name }) => {
  return (
    <SelectedNFTContainer>
      <SelectedNFTImageContainer>
        <Image
          loader={() => image}
          src={image}
          alt="nft item"
          layout="fill"
          objectFit="contain"
        />
      </SelectedNFTImageContainer>
      <SelectedNFTHeading>{name}</SelectedNFTHeading>
    </SelectedNFTContainer>
  );
};

export default SelectedNFT;
