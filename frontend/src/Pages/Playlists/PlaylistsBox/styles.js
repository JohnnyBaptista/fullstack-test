import styled from "styled-components";

export const Container = styled.div`
  margin: 10px;
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

export const PlaylistItem = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 3px;
  opacity: 0.3;
  transition: 0.3s ease all;

  :hover {
    width: 110px;
    height: 110px;
    opacity: 1;
    transition: 0.3s ease all;
  }
`;

export const PlaylistLink = styled.a``;
