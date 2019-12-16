import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const MenuPage = styled.div`
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #9bf2d7;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    }
`;

export const MenuItem1 = styled.div`
  background: #ffa8ca;
  height: 45vh;

  &:hover{
    background: hotpink;
  }
`;


export const MenuItem2 = styled.div`
  background: #f2e266;
  height: 45vh;
`;

export const MenuItem3 = styled.div`
  background: aqua;
  height: 45vh;
`;

export const MenuItem4 = styled.div`
  background: orange;
  height: 45vh;
`;

export const MenuSummerBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #9bf2d7;
  height: 45vh;
  

`;

export const MenuWinterBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  height: 45vh;
`;

export const BottomMenuBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  height: 45vh;
`;

