import { MediaContextProvider } from "./utils/Media";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <MediaContextProvider>
      <Navbar>
        <h1>App</h1>
      </Navbar>
    </MediaContextProvider>
  );
};

export default App;
