import React, { useState } from "react";

import { useSpring, animated } from "react-spring";

import {
  Container,
  TitleContainer,
  Body,
  Left,
  ButtonContainer,
  Right,
} from "./styles";
import Typography from "../../Components/Typography";
import Button from "../../Components/Button";
import PlaylistController from "../../Controllers/PlaylistController";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/RotateLoader";
import { Palette } from "../../styles/palette";

function Home() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const props = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: { opacity: 0, marginLeft: 20 },
    config: { duration: 1000 },
  });

  async function getPlaylist(lat, lon) {
    setLoading(true);
    const { playlists } = await new PlaylistController(
      lat,
      lon
    ).getPlaylistByTemperature();
    setLoading(false);

    history.push({ pathname: "/playlist", state: { playlists } });
  }

  async function handleClick() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        getPlaylist(latitude, longitude);
      },
      (err) => {
        alert("There has been an error finding your location");
        console.log(err);
      }
    );
  }

  return (
    <Container>
      <animated.div style={props}>
        <TitleContainer>
          <Typography type="title">A playlist to you...</Typography>
        </TitleContainer>
        <Body>
          <Left>
            <TitleContainer>
              <Typography type="sub" size={50}>
                It's very simple...
              </Typography>
              <Typography type="text" marg={2} pad={2}>
                We are gonna suggest you a playlist, based on your location
              </Typography>
              <Typography type="text" marg={2} pad={2}>
                Just need to press the button
              </Typography>
            </TitleContainer>
            <ButtonContainer onClick={() => handleClick()}>
              <Button width={32}>Encontre minha playlist</Button>
            </ButtonContainer>
          </Left>
          <Right>
            <ClipLoader
              size={150}
              color={Palette.primaryGreen}
              loading={loading}
            />
          </Right>
        </Body>
      </animated.div>
    </Container>
  );
}

export default Home;
