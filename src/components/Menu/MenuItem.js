import React, { Component } from "react";

import {
  FoodTextLayout,
  FoodImage,
  FoodName,
  FoodCost
} from "../Food/FoodStyled";
import { MenuCard } from "./MenuItemStyled";
import { MenuButton, StyledLink } from "../Button";

export default class MenuItem extends Component {
  render() {
    return (
      <MenuCard>
        <FoodImage />
        <FoodTextLayout>
          <FoodName>{this.props.name}</FoodName>
          <FoodCost>... {"$" + this.props.cost}</FoodCost>
          <StyledLink to="/sweets-to-go/purchase">
            <MenuButton>Add to cart</MenuButton>
          </StyledLink>
        </FoodTextLayout>
      </MenuCard>
    );
  }
}
