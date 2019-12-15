import React from "react";

import {
  LoginPage,
  YellowBanner,
  PinkContainer,
  LoginStyled,
  LoginHeader,
  AquaBanner,
} from './LoginStyled';

import {
  Button,
  StyledLink,
  SignupLink,
  InputStyling,
} from '../Button';

export const Login = () => (
  <LoginPage>
    <YellowBanner/>
    <PinkContainer>
      
      <LoginStyled>
        <LoginHeader>Login</LoginHeader>
        
        <InputStyling>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </InputStyling>
        
        <StyledLink to="/order"><Button>Login</Button></StyledLink>
        <p><SignupLink to="/signup">Need to Sign-Up?</SignupLink></p>
      </LoginStyled>
    </PinkContainer>
    <AquaBanner/>
  </LoginPage>
);