export const getAssetPrice = (nft) => {
  const contractDecimals = nft.orders[0].payment_token_contract.decimals;
  const higherOffer = nft.orders.sort(
    (a, b) => b.current_price - a.current_price
  )[0].current_price;
  const currentPriceInCrypto = higherOffer / Math.pow(10, contractDecimals);
  const currentPriceInUSD =
    nft.orders[0].payment_token_contract.usd_price * currentPriceInCrypto;
  const assetPrice = {
    cryptoPrice: parseFloat(currentPriceInCrypto.toFixed(2)),
    usdPrice: parseFloat(currentPriceInUSD.toFixed(2)),
  };
  console.log(assetPrice);
  return assetPrice;
};
