import { Image, Menu } from "semantic-ui-react";
import GoogleAuth from "../GoogleAuth";

const NavBarDesktop = (props) => {
  return (
    <Menu fixed="top" inverted>
      <Menu.Item>
        <Image size="mini" src={props.pic} />
      </Menu.Item>
      <Menu.Item>Home</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <GoogleAuth />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBarDesktop;
