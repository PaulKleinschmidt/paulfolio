import styled from 'styled-components';
import { colors } from '../theme';

export const SectionWrapper = styled.div<{ width?: string }>`
  ${(props) => `width: ${props.width || '100%'};`}
  max-width: 1000px;
  margin: 100px auto 20px;
  height: auto;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Section = styled.div<{ width?: string }>`
  margin: 50px;
  margin-right: 50px;
  margin-bottom: 100px;
  ${(props) => props.width && `width: ${props.width};`}

  @media (max-width: 900px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Box = styled.div`
  padding-bottom: 20px;
  padding-top: 10px;
  border-bottom: 4px solid ${(props) => props.color};
  background-color: beige;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1), transform 0.1s ease-in-out;
  margin-bottom: 20px;
`;

export const Link = styled.a`
  cursor: pointer;
  margin-right: 20px;
  text-decoration: none;
  color: ${colors.black};
  border-bottom: 2px solid ${colors.black};
  font-size: 20px;
  font-weight: bold;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${(props) => props.color};
    border-color: ${(props) => props.color};
  }
`;
