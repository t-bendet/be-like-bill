import React from "react";
import { Media } from "../../utils/Media";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "./NavBarDesktop";

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
