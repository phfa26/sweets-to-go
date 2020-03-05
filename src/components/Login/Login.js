import React from "react";

import {
  LoginPage,
  YellowBanner,
  PinkContainer,
  LoginStyled,
  LoginHeader,
  AquaBanner
} from "./LoginStyled";

import { Button, StyledLink, SignupLink, InputStyling } from "../Button";

export const Login = () => (
  <LoginPage>
    <YellowBanner />
    <PinkContainer>
      <LoginStyled>
        <LoginHeader>Login</LoginHeader>

        <InputStyling>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </InputStyling>

        <StyledLink to="/sweets-to-go/menu">
          <Button>Login</Button>
        </StyledLink>
        <SignupLink to="/sweets-to-go/signup">Need to Sign-Up?</SignupLink>
      </LoginStyled>
    </PinkContainer>
    <AquaBanner />
  </LoginPage>
);
