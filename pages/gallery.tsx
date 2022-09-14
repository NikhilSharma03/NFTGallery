import type { NextPage } from "next";
import Head from "next/head";
import UICircles from "../components/UICircles/UICircles";
import { Container, NFTMenu } from "./../styles/Gallery.style";
import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import useAppSelector from "./../hooks/useAppSelector";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import NFTMenuItem from "../components/NFTMenuItem/NFTMenuItem";
import { fetchUserPOLNFTs } from "./../utils/fetchNFTs";
import Loading from "../components/Loading/Loading";
import Alert from "../components/Alert/Alert";
import { NFTData } from "./../types/NFT";
import SelectedNFT from "../components/SelectedNFT/SelectedNFT";

const Gallery: NextPage = () => {
  const [userNFTs, setUserNFTs] = useState<NFTData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [isNFTSelected, setIsNFTSelected] = useState<boolean>(false);
  const [selectedNFTID, setSelectedNFTID] = useState<string>("");
  const [selectedNFT, setSelectedNFT] = useState<NFTData>();

  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();
  const alertCancelRef = useRef();

  const router = useRouter();

  const isWalletConnected: boolean = useAppSelector(
    (state) => state.user.isWalletConnected
  );
  const walletAddress: string = useAppSelector(
    (state) => state.user.userWalletAccount
  );

  useEffect(() => {
    if (!isWalletConnected) {
      router.push("/");
      return;
    }

    setLoading(true);
    onFetchUserNFTsHandler()
      .then((data) => {
        setError("");
        setUserNFTs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        onAlertOpen();
      });
  }, []);

  const onFetchUserNFTsHandler = async () => {
    const account = walletAddress;
    const LW3DAOCollectionAddress: string = process.env
      .LW3DAO_CONTRACT_ADDRESS as string;
    const BuildSpaceCollectionAddress: string = process.env
      .BUILDSPACE_CONTRACT_ADDRESS as string;

    const UsersNFT = [];

    // Fetching LW3DAO NFTs
    let res, data;
    res = await fetchUserPOLNFTs(account, LW3DAOCollectionAddress);
    if (res.status !== 200) {
      throw new Error("failed to fetch LW3DAO NFTs");
    }
    data = await res.json();
    let filteredData: NFTData[] = data.ownedNfts.map((item: any) => {
      let image: string = item.metadata.image;
      if (image.startsWith("ipfs://")) {
        image = "https://ipfs.io/ipfs/" + image.split("ipfs://")[1];
      }
      return {
        tokenID: item.id.tokenId,
        name: item.metadata.name,
        description: item.metadata.description,
        image: image,
        isSelected: false,
      };
    });
    UsersNFT.push(...filteredData);
    // Fetching BuildSpace NFTs
    res = await fetchUserPOLNFTs(account, BuildSpaceCollectionAddress);
    if (res.status !== 200) {
      throw new Error("failed to fetch BuildSpace NFTs");
    }
    data = await res.json();
    filteredData = data.ownedNfts.map((item: any) => {
      let image: string = item.metadata.image;
      if (image.startsWith("ipfs://")) {
        image = "https://ipfs.io/ipfs/" + image.split("ipfs://")[1];
      }
      return {
        tokenID: item.id.tokenId,
        name: item.metadata.name,
        description: item.metadata.description,
        image: image,
        isSelected: false,
      };
    });
    UsersNFT.push(...filteredData);

    return UsersNFT;
  };

  console.log(isNFTSelected, selectedNFTID, selectedNFT);

  const onSelectNFTHandler = (tokenID: string) => {
    const updatedUserNFT = [...userNFTs];

    if (isNFTSelected && selectedNFTID !== tokenID) {
      const toUpdateNFTIndex = updatedUserNFT.findIndex(
        (nft) => nft.tokenID === selectedNFTID
      );
      const toUpdateNFT = updatedUserNFT[toUpdateNFTIndex];
      toUpdateNFT.isSelected = false;
      updatedUserNFT[toUpdateNFTIndex] = toUpdateNFT;
    }

    const toUpdateNFTIndex = updatedUserNFT.findIndex(
      (nft) => nft.tokenID === tokenID
    );
    const toUpdateNFT = updatedUserNFT[toUpdateNFTIndex];

    if (toUpdateNFT.isSelected) {
      if (toUpdateNFT.tokenID === selectedNFTID) {
        setIsNFTSelected(false);
        setSelectedNFTID("");
        setSelectedNFT(undefined);
      }
      toUpdateNFT.isSelected = false;
    } else {
      setIsNFTSelected(true);
      setSelectedNFTID(toUpdateNFT.tokenID);
      setSelectedNFT(toUpdateNFT);
      toUpdateNFT.isSelected = true;
    }
    updatedUserNFT[toUpdateNFTIndex] = toUpdateNFT;

    setUserNFTs(updatedUserNFT);
  };

  return (
    <>
      <Loading showModal={loading} />
      <Alert
        cancelRef={alertCancelRef}
        isOpen={isAlertOpen}
        message={error}
        onClose={onAlertClose}
      />
      <Container>
        <Head>
          <title>NFTGallery | Home</title>
        </Head>
        <Box>
          <NFTMenu>
            {userNFTs.length > 0 ? (
              userNFTs.map((nft) => (
                <NFTMenuItem
                  key={nft.tokenID}
                  tokenID={nft.tokenID}
                  isSelected={nft.isSelected}
                  image={nft.image}
                  selectNFT={onSelectNFTHandler}
                />
              ))
            ) : (
              <Flex justify="center" width="100%">
                <Heading
                  color="text"
                  display="inline-block"
                  margin="3rem auto"
                  padding="1rem"
                  borderRadius="10px"
                  background="#000"
                >
                  No NFT Found
                </Heading>
              </Flex>
            )}
          </NFTMenu>
        </Box>
        {isNFTSelected ? (
          <SelectedNFT
            name={selectedNFT?.name as string}
            image={selectedNFT?.image as string}
          />
        ) : (
          userNFTs.length > 0 && (
            <Flex justify="center">
              <Heading
                color="text"
                display="inline-block"
                margin="3rem auto"
                padding="1rem"
                borderRadius="10px"
                background="#000"
              >
                Select NFT To Get Details
              </Heading>
            </Flex>
          )
        )}
        {/* BG Cirlcles */}
        <UICircles type="purple" />
        <UICircles type="green" />
      </Container>
    </>
  );
};

export default Gallery;
