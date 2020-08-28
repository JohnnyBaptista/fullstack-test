import styled from "styled-components";
import { Palette } from "../../styles/palette";

export const Title = styled.h1`
  font-size: ${(props) => (props.size ? `${props.size}px` : "60px")};
  color: ${(props) => (props.color ? props.color : Palette.white)};
  padding: ${(props) => (props.pad ? `${props.pad}px` : '5px')} 0px;
  margin: ${(props) => (props.marg ? `${props.marg}px` : '5px')} 0px;
  font-family: 'Roboto';
`;

export const SubTitle = styled.h3`
  font-size: ${(props) => (props.size ? `${props.size}px` : "40px")};
  color: ${(props) => (props.color ? props.color : Palette.white)};
  padding: ${(props) => (props.pad ? `${props.pad}px` : '5px')} 0px;
  margin: ${(props) => (props.marg ? `${props.marg}px` : '5px')} 0px;
  font-family: 'Roboto';
`;

export const Text = styled.p`
  font-size: ${(props) => (props.size ? `${props.size}px` : "14px")};
  color: ${(props) => (props.color ? props.color : Palette.white)};
  padding: ${(props) => (props.pad ? `${props.pad}px` : '5px')} 0px;
  margin: ${(props) => (props.marg ? `${props.marg}px` : '5px')} 0px;
  font-family: 'Roboto';
`;
