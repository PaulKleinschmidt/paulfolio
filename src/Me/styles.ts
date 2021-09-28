

import styled from 'styled-components';
import { colors } from '../theme';


export const Header = styled.div`
  margin: 100px;
  margin-right: 50px;
`

export const Divider = styled.div`
  margin-top: 30vh;
  height: 100px;
  border: 4px solid #328de3;

  @media (max-width: 900px) {
    display: none;
  }
`

export const MyName = styled.div`
  text-align: left;
  font-family: 'Questrial', sans-serif;
  font-size: 40px;
  font-weight: 700;
  margin-top: 30vh;
  margin-bottom: 4px;
  color: ${colors.black};
`

export const MyJob = styled.div`
  font-size: 30px;
  margin: auto;
  text-align: left;
  font-weight: 100;
  margin-top: 0px !important;
`

export const About = styled.div`
  margin-top: 150px;
  font-size: 20px;
  text-align: left;
  line-height: 2;
`

export const Hi = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`

export const Icons = styled.div`
  cursor: pointer;
  margin-top: 40px;
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 40px 0 0;
  color: ${colors.black};

  svg {
    transition: all .1s ease-in-out;

    &:hover {
      color: ${colors.orange};
    }
  }
`
