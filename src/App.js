import GoogleAuth from "./components/GoogleAuth";
import { MediaContextProvider } from "./utils/Media";
import Navbar from "./components/Navbar";

const leftItems = [{ as: "a", content: "Home", key: "home" }];
const rightItems = [{ as: "a", content: "Login", key: "login" }];

const App = () => {
  return (
    <MediaContextProvider>
      <Navbar leftItems={leftItems} rightItems={rightItems}>
        <GoogleAuth />
      </Navbar>
    </MediaContextProvider>
  );
};

export default App;
