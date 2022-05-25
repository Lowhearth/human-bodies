import Body from './pages/Body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import './App.css';
import Gallery from './pages/Gallery';
import { useEffect } from 'react';
import { fetchAssets } from './api/opensea';
import { nfts } from './bodies';

function App() {
  const buildAssetUrl = (address: string, token: string): string => {
    return `https://api.opensea.io/api/v1/asset/${address}/${token}/?include_orders=true`;
  };

  const token = buildAssetUrl(
    '0x160c404b2b49cbc3240055ceaee026df1e8497a0',
    '8099'
  );

  useEffect(() => {
    const nftsList = fetchAssets(nfts);

    // nftsList.forEach((nft: any) => getAssetPrice(nft))

    // const fetchAssetInfo = async (url: string) => {
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   const contractDecimals = data.orders[0].payment_token_contract.decimals;
    //   const higherOffer = data.orders.sort(
    //     (a: any, b: any) => b.current_price - a.current_price
    //   )[0].current_price;
    //   const currentPrice = higherOffer / Math.pow(10, contractDecimals);
    //   console.log(data, currentPrice);
    // };
    // fetchAssetInfo(token);

    const fetchCollectionInfo = async (url: string) => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    // fetchCollectionInfo(
    //   'https://api.opensea.io/api/v1/asset/0x160c404b2b49cbc3240055ceaee026df1e8497a0/8099/?account_address=0xfff0400ea5406245e7b58bacafc7e0340961b024&include_orders=true'
    // );
  }, [token]);

  return (
    <div className="App">
      <TopBar></TopBar>
      <Routes>
        <Route path="/" element={<Gallery></Gallery>} />
        <Route path="/body/:id" element={<Body />} />
      </Routes>
    </div>
  );
}

export default App;
