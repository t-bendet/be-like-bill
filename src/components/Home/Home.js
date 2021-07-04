import React, { useState } from "react";
import { Media } from "../../utils/Media";
import { Container, Image, Button, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

const Home = ({ user }) => {
  const [meme, setMeme] = useState(
    "https://belikebill.ga/billgen-API.php?default=1"
  );
  const userMeme = () => {
    setMeme(
      `https://belikebill.ga/billgen-API.php?default=1&name=${
        user.fullName
      }&sex=${new Date()}`
    );
  };
  const nonUserMeme = () => {
    setMeme(
      `https://belikebill.ga/billgen-API.php?default=1&sex=${new Date()}`
    );
  };

  const renderBtn = () => {
    if (user) {
      return (
        <Segment raised inverted>
          <Button color="yellow" onClick={userMeme}>
            {`hey ${
              user.fullName || user.firstName || user.lastName || "john doe"
            }! click here get your own meme`}
          </Button>
        </Segment>
      );
    } else {
      return (
        <Segment raised inverted>
          <Button secondary onClick={nonUserMeme}>
            click on the sign in button on the upper right corner to get your
            own meme
          </Button>
        </Segment>
      );
    }
  };
  return (
    <div>
      <Media at="sm">
        <Container textAlign="center">
          <Image src={meme} size="huge" centered />
          {renderBtn()}
        </Container>
      </Media>

      <Media greaterThan="sm">
        <Container textAlign="center">
          <Image src={meme} size="huge" centered />
          {renderBtn()}
        </Container>
      </Media>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(Home);
