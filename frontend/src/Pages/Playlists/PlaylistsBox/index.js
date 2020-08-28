import React from "react";

import { Container, PlaylistItem, PlaylistLink } from "./styles";

function PlaylistsBox({ playlists }) {
  const sugestionPlaylists = playlists.slice(-4);
  return (
    <Container>
      {sugestionPlaylists.map((playlist) => (
        <PlaylistLink key={playlist.id} href={playlist.external_urls.spotify} target="blank">
          <PlaylistItem src={playlist.images[0].url} />
        </PlaylistLink>
      ))}
    </Container>
  );
}

export default PlaylistsBox;
