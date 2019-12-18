import React, { Component } from 'react';

// import MenuItem from './MenuItem';
import { PageSize, AquaBanner, PinkContainer, YellowBanner } from './PurchasePageStyled';

export default class PurchasePage extends Component {
  render() {
    return (
      <PageSize>
        <AquaBanner/>
        <PinkContainer>Hello</PinkContainer>
        <YellowBanner/>
      </PageSize>
    );
  }
}