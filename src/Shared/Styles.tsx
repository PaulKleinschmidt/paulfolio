import styled from "styled-components";

export const SectionWrapper = styled.div<{width: string; }>`
  ${props => `width: ${props.width};`}

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const Section = styled.div<{ width?: string; }>`
  margin: 50px;
  margin-right: 50px;
  ${props => props.width && `width: ${props.width};`}

  @media (max-width: 900px) {
    margin-left: 0;
    margin-right: 0;
  }
`

export const Box = styled.div`
  margin: 10px 0;
  padding-bottom: 20px;
  padding-top: 10px;
  border-bottom: 4px solid ${props => props.color};
  background-color: #2d2d2f;
  padding: 20px;
  border-radius: 3px;
  transition: all .1s ease-in-out;

  &:hover {
    box-shadow: 0 4px 14px black;
    transform: translate3d(0px, -3px, 0px);
  }
`

export const Link = styled.a`
  cursor: pointer;
  margin-right: 20px;
  text-decoration: none;
  color: white;
  border-bottom: 2px solid white;
  font-size: 20px;
  font-weight: bold;
  transition: all .1s ease-in-out;

  &:hover {
    color: ${props => props.color};
    border-color: ${props => props.color};
  }
`

