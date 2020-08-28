import React, { useState } from "react";

import { Container, ImageBox, InfoBox } from "./styles";
import Typography from "../../../Components/Typography";
import Button from "../../../Components/Button";

function ChosenPlaylist({ playlist }) {
  const [image, setImage] = useState(playlist.images[0].url);
  console.log({ playlist });

  return (
    <Container>
      <ImageBox src={image} />
      <InfoBox>
        <Typography type="sub">{playlist.name}</Typography>
        <Typography type="text">{playlist.description}</Typography>
        <Button width={20} href={playlist.external_urls.spotify}>Listen to this playlist</Button>
      </InfoBox>
    </Container>
  );
}

export default ChosenPlaylist;
