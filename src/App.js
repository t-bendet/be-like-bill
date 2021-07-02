import { MediaContextProvider } from "./utils/Media";
import Navbar from "./components/Navbar";

// TODO refactor nav bar to seperate components
// add user direction to run in localhost about env variables
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
