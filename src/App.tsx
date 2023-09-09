import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <ReactQueryDevtools initialIsOpen={true} />
    </div>
  );
};

export default App;
