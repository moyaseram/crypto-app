import chrtUp from "../../assets/chart-up.svg";
import chrtDown from "../../assets/chart-down.svg";
import MoonLoader from "react-spinners/MoonLoader";
import styles from "./TableCoin.module.css";

const TableCoin = ({ coins, isLoading }) => {
  console.log(coins);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <MoonLoader color="#3874ff" speedMultiplier={0.7} />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableCoin;

const TableRow = ({
  coin: {
    name,
    image,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  },
}) => {
  return (
    <tr>
      <td>
        <div className={styles.symbol}>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chrtUp : chrtDown} alt={name} />
      </td>
    </tr>
  );
};
