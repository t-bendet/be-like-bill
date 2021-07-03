import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    // load the auth2 client asynchronically
    window.gapi.load("client:auth2", async () => {
      await window.gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "email",
      });
      // initalizing the auth instance object
      this.auth = await window.gapi.auth2.getAuthInstance();
      this.onAuthChange(this.auth.isSignedIn.get());
      this.auth.isSignedIn.listen(this.onAuthChange);
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      let {
        LS: id,
        Ve: fullName,
        uU: firstName,
        qS: lastName,
        Nt: email,
        CJ: picUrl,
      } = this.auth.currentUser.ee.dt;
      this.props.signIn({ id, fullName, firstName, lastName, email, picUrl });
    } else {
      this.props.signOut();
    }
  };
  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return (
        <Button primary loading>
          Loading
        </Button>
      );
    } else if (this.props.isSignedIn) {
      return (
        <Button color="google plus" onClick={this.onSignOut}>
          <Icon name="google" red /> Sign Out
        </Button>
      );
    } else {
      return (
        <Button color="green" onClick={this.onSignIn}>
          <Icon name="google" red /> Sign In With Google
        </Button>
      );
    }
  }
  render() {
    return <>{this.renderAuthButton()}</>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
