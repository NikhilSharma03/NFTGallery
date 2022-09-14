/**
 *  Returns response for users NFTs
 *
 * @param ownerAddress The address of user account wallet
 * @param contractAddress The address of contract
 * @returns Promise<Response> The Response data
 */
export const fetchUserPOLNFTs = (
  ownerAddress: string,
  contractAddress: string
) => {
  const API_KEY = process.env.ALCHEMY_API_KEY;
  const URL = "https://polygon-mainnet.g.alchemy.com/v2";

  return fetch(
    `${URL}/${API_KEY}/getNFTs?owner=${ownerAddress}&contractAddresses%5B%5D=${contractAddress}`
  );
};
