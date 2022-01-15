import { useEffect, useState } from "react";

function BabydogeDashboard() {
  const [coins, setCoins] = useState(5);

  return (
    <div>
      <h1>Babydogecoin</h1>
      <h3>{coins}</h3>
    </div>
  );
}

export default BabydogeDashboard;
