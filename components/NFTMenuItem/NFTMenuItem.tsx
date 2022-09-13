import type { NextPage } from "next";
import Image from "next/image";
import {
  NFTMenuItemContainer,
  NFTMenuItemImageContainer,
  SelectedStyle,
} from "./NFTMenuItem.style";

type Props = {
  image: string;
  isSelected: boolean;
};

const NFTMenuItem: NextPage<Props> = ({ image, isSelected }) => {
  const SelectedStyling = () => (
    <SelectedStyle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 310.277 310.277"
        xmlSpace="preserve"
        width="5rem"
      >
        <path
          style={{ fill: "limegreen" }}
          d="M155.139 0C69.598 0 0 69.598 0 155.139c0 85.547 69.598 155.139 155.139 155.139 85.547 0 155.139-69.592 155.139-155.139C310.277 69.598 240.686 0 155.139 0zm-10.962 196.567L90.571 142.96l8.437-8.437 45.169 45.169 81.34-81.34 8.437 8.437-89.777 89.778z"
        />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </svg>
    </SelectedStyle>
  );

  return (
    <NFTMenuItemContainer>
      <NFTMenuItemImageContainer>
        {isSelected && <SelectedStyling />}
        <Image loader={() => image} src={image} alt="nft item" layout="fill" />
      </NFTMenuItemImageContainer>
    </NFTMenuItemContainer>
  );
};

export default NFTMenuItem;
