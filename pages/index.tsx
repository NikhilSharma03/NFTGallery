import type { NextPage } from "next";
import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import {
  Container,
  ImageContainer,
  HeroHeading,
  HeroButton,
  HeroContainer,
} from "./../styles/home.style";
import Image from "next/image";
import UICircles from "../components/UICircles/uiCircles";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>NFTGallery | Home</title>
      </Head>
      <Flex align="center" justify="center">
        <Flex align="center" justify="center" direction="column" height="91vh">
          <Box flex="1">
            <HeroContainer>
              <HeroHeading>Explore your Proof of Knowledge NFT</HeroHeading>
              <HeroButton size="lg">Explore</HeroButton>
            </HeroContainer>
          </Box>
          <Box flex="1">
            <ImageContainer>
              <Image src="/banner.png" alt="banner" width="800" height="600" />
            </ImageContainer>
          </Box>
        </Flex>
      </Flex>
      {/* BG Cirlcles */}
      <UICircles type="purple" />
      <UICircles type="green" />
    </Container>
  );
};

export default Home;
