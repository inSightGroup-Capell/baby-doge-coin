import { useEffect, useState } from "react";
import logo from "./images/babydogecoin.png";
import doge from "./images/babydoge.png";

function BabydogeDashboard() {
  const [coinCount, setCoinCount] = useState(0);
  const [coinValue, setCoinValue] = useState(2);

  let ADRESS = "0x9c41f4215152d3c431f29c228afb0cf4b5a1a2d8";
  let CONTRACT_ADRESS = "0xc748673057861a797275CD8A068AbB95A902e8de";
  let MINUTE_INTERVAL = 8;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  async function fetchCoinCount() {
    try {
      let url = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${CONTRACT_ADRESS}&address=${ADRESS}&tag=latest&apikey=`;
      url += process.env.REACT_APP_API_TOKEN;
      const response = await fetch(url);
      console.log("Fetching API succeded");
      const data = await response.json();
      console.log(data);
      const coinAmount = (data.result * 1) / 1000000000;
      setCoinCount(coinAmount);
    } catch (err) {
      console.log("Fetching API endpoint failed");
      console.log(err);
    }
  }

  async function fetchCoinValue() {
    try {
      let url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=baby-doge-coin";
      const response = await fetch(url);
      console.log("Fetching API succeded");
      const data = await response.json();
      console.log(data[0]);
      const coinPrice = data[0].current_price;
      setCoinValue(coinPrice);
    } catch (err) {
      console.log("Fetching API endpoint failed");
      console.log(err);
    }
  }

  useEffect(() => {
    fetchCoinCount();
    fetchCoinValue();

    const intervalCount = setInterval(() => {
      fetchCoinCount();
    }, MINUTE_INTERVAL * 60000);
    const intervalValue = setInterval(() => {
      fetchCoinValue();
    }, MINUTE_INTERVAL * 60000);

    return () => {
      clearInterval(intervalCount);
      clearInterval(intervalValue);
    };
  }, []);

  return (
    <div className="content">
      <nav className="nav">
        <img className="nav-logo" alt="" src={logo} />
        <h1 className="nav-title">Babydogecoin</h1>
      </nav>
      <div className="top-section">
        <h1 className="count-display">
          {numberWithCommas(Math.floor(coinCount))}
          <img className="count-coin" alt="" src={logo} />
        </h1>
      </div>
      <div className="value-container">
        <h3 className="value-display">
          $ {numberWithCommas(Math.floor(coinCount * coinValue))}
        </h3>
      </div>
      <div className="babydoge-container">
        <img className="babydoge" alt="" src={doge} />
      </div>
    </div>
  );
}

export default BabydogeDashboard;
