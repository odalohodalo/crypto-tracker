// import getCoins from "./components/getCoins";
import getCoins from "../getCoins";
import { useQuery, QueryKey } from "@tanstack/react-query";

const Home = () => {
  const queryKey: QueryKey = ["coinData"];

  const { isLoading, error, data } = useQuery(queryKey, getCoins) as {
    isLoading: boolean;
    error: { message: string };
    data: {
      data: {
        coins: {
          name: string;
          symbol: string;
          rank: number;
          uuid: any;
          iconUrl: string;
          price: number;
        }[];
      };
    };
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      {data &&
        data.data.coins.map((coin) => (
          <div key={coin.uuid}>
            <h1>{coin.name}</h1>
            <img src={coin.iconUrl} alt="coin-symbols" width={30} height={30} />
            <p>Symbol: {coin.symbol}</p>
            <p>Price: {coin.price} $</p>
            <p>Rank: {coin.rank}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
