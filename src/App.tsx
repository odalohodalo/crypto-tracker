import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Home />
      <ReactQueryDevtools initialIsOpen={true} />
    </div>
  );
};

export default App;
