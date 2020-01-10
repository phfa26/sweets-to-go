import React from 'react';
import { ModalButton, Button } from '../Button';
import {ModalWrapper, ModalText} from './ModalStyled';

export const Modal = (props) => {
  return (
      <ModalWrapper
        style={{
          transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>

          <ModalText>
            <h1 id="modalTitle">Enjoy Your Sweets</h1>
            <p id="modalParr">Thanks for shopping with us</p>
          </ModalText>
          

      <ModalButton onClick={props.close}>Close</ModalButton>
    </ModalWrapper>
  )
};