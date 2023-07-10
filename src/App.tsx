import { useQuery, QueryKey } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import getCoins from "./components/getCoins";

function App() {
  const queryKey: QueryKey = ["coinData"];

  const { isLoading, error, data } = useQuery(queryKey, getCoins, {
    onSuccess: (response) => {
      console.log(response);
    },
  }) as {
    isLoading: boolean;
    error: { message: string };
    data: {
      data: {
        coins: {
          id: number;
          name: string;
          symbol: string;
          rank: number;
          uuid: any;
          iconUrl: string;
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
            <p>Rank: {coin.rank}</p>
          </div>
        ))}
      <ReactQueryDevtools initialIsOpen={true} />
    </div>
  );
}

export default App;
