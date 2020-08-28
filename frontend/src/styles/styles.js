import styled from 'styled-components';
import { Palette } from './palette';

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${props => Palette.black};
`;