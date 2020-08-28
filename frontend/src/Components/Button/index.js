import React from "react";

import { ButtonContainer, ButtonContainerLink } from "./styles";
import Typography from "../Typography";

function Button({ children, href, ...rest }) {
  if (!href) {
    return (
      <ButtonContainer href={href} {...rest}>
        <Typography type="text" size={16}>
          {children}
        </Typography>
      </ButtonContainer>
    );
  } else {
    return (
      <ButtonContainerLink target='blank' href={href} {...rest}>
        <Typography type="text" size={16}>
          {children}
        </Typography>
      </ButtonContainerLink>
    );
  }
}

export default Button;
