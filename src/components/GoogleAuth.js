import React from "react";

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
      this.setState({ isSignedIn: this.auth.isSignedIn.get() });
      // TODO problam with rerendering after initalizing
    });
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Show spinner</div>;
    } else if (this.state.isSignedIn) {
      return <div>Signed In</div>;
    } else {
      return <div>Not Signed In</div>;
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
