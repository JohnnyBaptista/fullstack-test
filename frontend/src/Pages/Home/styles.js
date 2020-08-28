import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 50px;
  margin-top: 110px;
`;

export const TitleContainer = styled.div``;

export const Body = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
`;

export const Left = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 70%;
  height: 100%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Right = styled.div`
  display: flex;
  padding: 50px;
  width: 30%;
`;
