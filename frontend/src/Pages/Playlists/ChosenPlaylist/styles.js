import styled from "styled-components";
import { Palette } from "../../../styles/palette";

export const Container = styled.div`
  border-radius: 3px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
`;

export const ImageBox = styled.img`
  border: 1px solid ${(props) => Palette.white};
  width: 200px;
  height: 200px;
`;

export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
