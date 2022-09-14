import type { NextPage } from "next";
import Image from "next/image";
import {
  NFTMenuItemContainer,
  NFTMenuItemImageContainer,
  SelectedStyle,
} from "./NFTMenuItem.style";
import GreenTickSvg from "./../../assets/svg/GreenTick";

type Props = {
  image: string;
  isSelected: boolean;
  tokenID: string;
  // eslint-disable-next-line no-unused-vars
  selectNFT: (tokenID: string) => void;
};

const NFTMenuItem: NextPage<Props> = ({
  image,
  isSelected,
  tokenID,
  selectNFT,
}) => {
  return (
    <NFTMenuItemContainer onClick={() => selectNFT(tokenID)}>
      <NFTMenuItemImageContainer>
        {isSelected && (
          <SelectedStyle>
            <GreenTickSvg />
          </SelectedStyle>
        )}
        <Image
          loader={() => image}
          src={image}
          alt="nft item"
          layout="fill"
          objectFit="contain"
        />
      </NFTMenuItemImageContainer>
    </NFTMenuItemContainer>
  );
};

export default NFTMenuItem;
