import React,{useState, useEffect } from "react";
import { Media } from "../../utils/Media";
import { Container,Image,Button,Icon ,Segment} from "semantic-ui-react";
import { connect } from "react-redux";

  

// TODO find a snarter way to rerender
let counter = 0
const Home = ({user}) => {
  const [meme, setMeme] = useState("https://belikebill.ga/billgen-API.php?default=1")
  const userMeme = ()=>{
    counter += 1
    setMeme(`https://belikebill.ga/billgen-API.php?default=1&name=${user.firstName}&sex=${counter}`)
  }
  const renderBtn = ()=>{
    if (user){
      return (
        <Button color="pink" onClick={userMeme}>
          <Icon name="google" /> get your own meme
        </Button>
      )
    }else{
      return (
        <Button disabled color="green" >
          <Segment/>
          <Icon name="google" /> click on the sign in button on the upper right corner to get your own meme
        </Button>
      )
    }
  }
  return (
    <div>
      <Media at="sm">
        <Container >
          <Image src={meme} size='big' />
          {renderBtn()}
        </Container>
      </Media>

      <Media greaterThan="sm">
        <Container >
          <Image src={meme} size='big'  />
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


