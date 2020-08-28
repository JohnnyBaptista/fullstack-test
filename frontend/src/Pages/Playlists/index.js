import React from "react";
import { useLocation } from "react-router-dom";

import ChosenPlaylist from "./ChosenPlaylist";

import { Container } from "./styles";
import Typography from "../../Components/Typography";
import PlaylistsBox from "./PlaylistsBox";
import { animated, useSpring } from "react-spring";

function Playlists() {
  const location = useLocation();
  const { playlists } = location.state;

  const props = useSpring({
    opacity: 1,
    marginBottom: 0,
    from: { opacity: 0, marginBottom: 100 },
    config: { duration: 1000 },
    display: "flex",
    justifyContent: "center",
  });

  return (
    <animated.div style={{ ...props, width: "100%" }}>
      <Container>
        <Typography type="title" style={{ textAlign: "center" }}>
          We chose you this playlist!
        </Typography>
        <ChosenPlaylist playlist={playlists[0]} />
        <Typography type="text">
          Or maybe you will like one of these...
        </Typography>
        <PlaylistsBox playlists={playlists} />
      </Container>
    </animated.div>
  );
}

export default Playlists;
