import { useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import {
  Container,
  ImageContainer,
  HeroHeading,
  HeroButton,
  HeroContainer,
} from "./../styles//Home.style";
import Image from "next/image";
import UICircles from "../components/UICircles/UICircles";
import Alert from "./../components/Alert/Alert";
import useAppSelector from "./../hooks/useAppSelector";

const Home: NextPage = () => {
  const router = useRouter();
  const isWalletConnected: boolean = useAppSelector(
    (state) => state.user.isWalletConnected
  );
  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();
  const alertCancelRef = useRef();

  const onNavGalleryHandler = () => {
    if (!isWalletConnected) {
      onAlertOpen();
      return;
    }
    router.push("/gallery");
  };

  return (
    <>
      <Alert
        message="Please Connect your Metamask Wallet!"
        cancelRef={alertCancelRef}
        isOpen={isAlertOpen}
        onClose={onAlertClose}
      />
      <Container>
        <Head>
          <title>NFTGallery | Home</title>
        </Head>
        <Flex align="center" justify="center">
          <Flex
            align="center"
            justify="center"
            direction="column"
            height="91vh"
          >
            <Box flex="1">
              <HeroContainer>
                <HeroHeading>Explore your Proof of Knowledge NFT</HeroHeading>
                <HeroButton size="lg" onClick={onNavGalleryHandler}>
                  Explore
                </HeroButton>
              </HeroContainer>
            </Box>
            <Box flex="1">
              <ImageContainer>
                <Image
                  src="/banner.png"
                  alt="banner"
                  width="800"
                  height="600"
                />
              </ImageContainer>
            </Box>
          </Flex>
        </Flex>
        {/* BG Cirlcles */}
        <UICircles type="purple" />
        <UICircles type="green" />
      </Container>
    </>
  );
};

export default Home;
