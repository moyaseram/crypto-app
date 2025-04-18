import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi.js";
import Pagination from "../modules/Pagination.jsx";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <div>
      <Pagination />
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
