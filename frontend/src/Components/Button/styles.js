import styled from "styled-components";
import { Palette } from "../../styles/palette";

export const ButtonContainer = styled.button`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: ${(props) => (props.circle ? `50%` : "8px")};
  background-color: ${(props) =>
    props.background ? `${props.background}` : Palette.primaryGreen};
  color: ${(props) => (props.color ? `${props.color}` : Palette.white)};
  font-size: 16pt;
  font-family: "Roboto";
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  :active {
    transition: 0.2s ease all;
    background-color: #9ee89f;
  }
  :hover {
    transition: 0.6s ease all;
    box-shadow: 2px 2px 4px rgba(255, 255, 255, .4);
  }
`;

export const ButtonContainerLink = styled.a`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: ${(props) => (props.circle ? `50%` : "8px")};
  background-color: ${(props) =>
    props.background ? `${props.background}` : Palette.primaryGreen};
  color: ${(props) => (props.color ? `${props.color}` : Palette.white)};
  font-size: 16pt;
  font-family: "Roboto";
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  :active {
    transition: 0.2s ease all;
    background-color: #9ee89f;
  }
  :hover {
    transition: 0.6s ease all;
    box-shadow: 2px 2px 4px rgba(255, 255, 255, .4);
  }
  text-decoration: none;
`;
