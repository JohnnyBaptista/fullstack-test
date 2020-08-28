import React from "react";
import { Title, SubTitle, Text } from "./styles";

function Typography({ type, children, ...rest }) {
  switch (type) {
    case "title":
      return <Title {...rest}>{children}</Title>;
    case "sub":
      return <SubTitle {...rest}>{children}</SubTitle>;
    case "text":
      return <Text {...rest}>{children}</Text>;
    default:
      return <Text {...rest}>{children}</Text>;
  }
}

export default Typography;
