import { MediaContextProvider } from "./utils/Media";
import Navbar from "./components/Navbar/Navbar";

// TODO check if there is a user pic to use,if not use bill
// TODO add user direction to run in localhost about env variables
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
