import type { NextPage } from "next";
import Head from "next/head";
import UICircles from "../components/UICircles/UICircles";
import { Container, NFTMenu } from "./../styles/Gallery.style";
import { Box } from "@chakra-ui/react";
import useAppSelector from "./../hooks/useAppSelector";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import NFTMenuItem from "../components/NFTMenuItem/NFTMenuItem";

const Gallery: NextPage = () => {
  const router = useRouter();
  const isWalletConnected: boolean = useAppSelector(
    (state) => state.user.isWalletConnected
  );

  useEffect(() => {
    if (!isWalletConnected) {
      router.push("/");
      return;
    }
  }, []);

  // const onFetchUserNFTsHandler = () => {};

  return (
    <Container>
      <Head>
        <title>NFTGallery | Home</title>
      </Head>
      <Box>
        <NFTMenu>
          {/* {data.map((item, index) => (
            <NFTMenuItem key={index} image={item} isSelected />
          ))} */}
        </NFTMenu>
      </Box>
      {/* BG Cirlcles */}
      <UICircles type="purple" />
      <UICircles type="green" />
    </Container>
  );
};

export default Gallery;
