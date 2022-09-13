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
};

const NFTMenuItem: NextPage<Props> = ({ image, isSelected }) => {
  return (
    <NFTMenuItemContainer>
      <NFTMenuItemImageContainer>
        {isSelected && (
          <SelectedStyle>
            <GreenTickSvg />
          </SelectedStyle>
        )}
        <Image loader={() => image} src={image} alt="nft item" layout="fill" />
      </NFTMenuItemImageContainer>
    </NFTMenuItemContainer>
  );
};

export default NFTMenuItem;
