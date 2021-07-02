import React from "react";
import { Button, Icon } from "semantic-ui-react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    // load the auth2 client asynchronically
    window.gapi.load("client:auth2", async () => {
      await window.gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "email",
      });
      // intializing the auth instance object
      this.auth = await window.gapi.auth2.getAuthInstance();
      this.onAuthChange();
      this.auth.isSignedIn.listen(this.onAuthChange);
      // TODO problam with rerendering after initalizing
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return (
        <Button primary loading>
          Loading
        </Button>
      );
    } else if (this.state.isSignedIn) {
      return (
        <Button color="google plus" onClick={this.onSignOut}>
          <Icon name="google" red /> Sign Out
        </Button>
      );
    } else {
      return (
        <Button color="green" onClick={this.onSignIn}>
          <Icon name="google" red /> Sign In
        </Button>
      );
    }
  }
  render() {
    return <>{this.renderAuthButton()}</>;
  }
}

export default GoogleAuth;
