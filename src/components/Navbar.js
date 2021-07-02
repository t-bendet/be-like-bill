import React from "react";
import { Media } from "../utils/Media";
import { Container, Icon, Image, Menu, Sidebar } from "semantic-ui-react";
import GoogleAuth from "../components/GoogleAuth";
import { connect } from "react-redux";

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

const NavBarChildren = (props) => (
  <Container style={{ marginTop: "5em" }}>{props.children}</Container>
);

class Navbar extends React.Component {
  state = {
    visible: false,
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });
  renderNavIcon = () => {
    if (this.props.user) {
      return this.props.user.picUrl;
    } else {
      return "https://react.semantic-ui.com/logo.png";
    }
  };
  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Media at="sm">
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
            pic={this.renderNavIcon()}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Media>

        <Media greaterThan="sm">
          <NavBarDesktop pic={this.renderNavIcon()} />
          <NavBarChildren>{children}</NavBarChildren>
        </Media>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(Navbar);
