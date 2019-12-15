import React from "react";

import {
  SignupPage,
  AquaBanner,
  PinkContainer,
  SignupStyled,
  SignupHeader,
  YellowBanner, 
} from './SignupStyled';

import {
  Button,
  StyledLink,
  SignupLink,
  InputStyling,
} from '../Button';

export const Signup = () => (
  <SignupPage>
    <AquaBanner/>
    <PinkContainer>

      <SignupStyled>
        <SignupHeader>Sign-Up</SignupHeader>

        <InputStyling>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Password Confirmation" />
        </InputStyling>

        <StyledLink to="/order"><Button>Sign-Up</Button></StyledLink>
        <p><SignupLink to="/login">Already have an account?</SignupLink></p>

      </SignupStyled>
    </PinkContainer>
    <YellowBanner/>
  </SignupPage>
);