import type { NextPage } from "next";
import Head from "next/head";
import UICircles from "../components/UICircles/UICircles";
import { Container, NFTMenu } from "./../styles/Gallery.style";
import { Box } from "@chakra-ui/react";
import NFTMenuItem from "../components/NFTMenuItem/NFTMenuItem";

const data = [
  "https://dailyillini.com/wp-content/uploads/2021/12/NFT-Trading-graphic-842x900.png",
  "https://dailyillini.com/wp-content/uploads/2021/12/NFT-Trading-graphic-842x900.png",
  "https://dailyillini.com/wp-content/uploads/2021/12/NFT-Trading-graphic-842x900.png",
  "https://dailyillini.com/wp-content/uploads/2021/12/NFT-Trading-graphic-842x900.png",
  "https://dailyillini.com/wp-content/uploads/2021/12/NFT-Trading-graphic-842x900.png",
  "https://dailyillini.com/wp-content/uploads/2021/12/NFT-Trading-graphic-842x900.png",
  "https://dailyillini.com/wp-content/uploads/2021/12/NFT-Trading-graphic-842x900.png",
  "https://dailyillini.com/wp-content/uploads/2021/12/NFT-Trading-graphic-842x900.png",
  "https://dailyillini.com/wp-content/uploads/2021/12/NFT-Trading-graphic-842x900.png",
  "https://dailyillini.com/wp-content/uploads/2021/12/NFT-Trading-graphic-842x900.png",
];

const Gallery: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>NFTGallery | Home</title>
      </Head>
      <Box>
        <NFTMenu>
          {data.map((item, index) => (
            <NFTMenuItem key={index} image={item} isSelected />
          ))}
        </NFTMenu>
      </Box>
      {/* BG Cirlcles */}
      <UICircles type="purple" />
      <UICircles type="green" />
    </Container>
  );
};

export default Gallery;
