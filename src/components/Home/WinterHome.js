import React from "react";
// import { Link } from "react-router-dom";

import {
  CoolerHomeWrapper,
  HeaderWrapper,
  HomeHeader,
  HomeSentence,
  StyledLink
} from "./HomeStyled";

import { Button } from "../Button";

export const WinterHome = () => (
  <CoolerHomeWrapper>
    <HeaderWrapper>
      <HomeHeader>Sweets To Go</HomeHeader>
      <HomeSentence>
        Because there's always <br /> room for dessert
      </HomeSentence>
    </HeaderWrapper>
    <StyledLink to="/sweets-to-go/login">
      <Button>Make An Order</Button>
    </StyledLink>
  </CoolerHomeWrapper>
);
