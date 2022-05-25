import { getAssetPrice } from './opensea.utils';
const OPENSEA_API_URL = 'https://api.opensea.io/api/v1';
const OPENSEA_ASSET_URL = 'https://opensea.io/assets/';

//build url for api request
const buildAssetApiUrl = (nft) =>
  `${OPENSEA_API_URL}/asset/${nft}/?include_orders=true`;

//build url for check asset in opensea directly
export const buildAssetUrl = (nft) => `${OPENSEA_ASSET_URL}/assets/${nft}`;

const fetchAssetInfo = (nft) => fetch(buildAssetApiUrl(nft));

export const fetchAssets = async (nfts) => {
  const assetsInfo = nfts.map((nft) => fetchAssetInfo(nft));
  const responses = await Promise.all(assetsInfo);

  const assetJsonResponses = responses.map((assetInfoResponse) =>
    assetInfoResponse.json()
  );
  const assetsData = await Promise.all(assetJsonResponses);
  assetsData.map((nft) => Object.assign(nft, { prices: getAssetPrice(nft) }));
  console.log(assetsData);
  return assetsData;
};
