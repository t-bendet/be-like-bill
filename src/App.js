import { MediaContextProvider } from "./utils/Media";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

// TODO add user direction to run in localhost about env variables
const App = () => {
  return (
    <MediaContextProvider>
      <Navbar>
        <Home />
      </Navbar>
    </MediaContextProvider>
  );
};

export default App;
