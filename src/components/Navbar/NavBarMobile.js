import { Icon, Image, Menu, Sidebar } from "semantic-ui-react";
import GoogleAuth from "../GoogleAuth";

const NavBarMobile = (props) => {
  const { children, onPusherClick, onToggle, visible, pic } = props;

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        items={[{ as: "a", content: "Home", key: "home" }]}
        vertical
        visible={visible}
      />
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        <Menu fixed="top" inverted>
          <Menu.Item>
            <Image size="mini" src={pic} />
          </Menu.Item>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <GoogleAuth />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default NavBarMobile;
