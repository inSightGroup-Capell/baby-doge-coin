import { useEffect, useState } from "react";

function BabydogeDashboard() {
  const [coins, setCoins] = useState(5);

  useEffect(() => {
    async function fetchCoinData() {
      try {
        let url =
          "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xc748673057861a797275CD8A068AbB95A902e8de&address=0x9c41f4215152d3c431f29c228afb0cf4b5a1a2d8&tag=latest&apikey=";
        url += process.env.REACT_APP_BSCSCAN_API_KEY;
        const response = await fetch(url);
        console.log("Fetching API succeded");
        const data = await response.json();
        console.log(data);
        const coinCount = (data.result * 1) / 1000000000;
        setCoins(coinCount);
      } catch (err) {
        console.log("Fetching API endpoint failed");
        console.log(err);
      }
    }

    fetchCoinData();
  }, []);

  return (
    <div>
      <h1>Babydogecoin</h1>
      <h3>{coins}</h3>
    </div>
  );
}

export default BabydogeDashboard;
