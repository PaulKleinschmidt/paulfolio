import styled from "styled-components";
import { colors } from "../theme";

export const Header = styled.div`
  font-family: 'Questrial', sans-serif;
  font-size: 40px;
  font-weight: 700;
  margin: auto;
  text-align: left;
  margin-bottom: 40px;
  color: ${colors.black};
`

export const ProjectName = styled.div`
  font-size: 22px;
  margin-bottom: 20px;
`

export const ProjectDescription = styled.div`
  line-height: 1.5em;
  margin-bottom: 40px;
  font-size: 20px;
  a {
    transition: all .1s ease-in-out;
    text-decoration: none;
    color: ${colors.black};
    font-weight: bold;
    border-bottom: 2px solid ${colors.black};
  }
`

export const ProjectImage = styled.img`
  height: 120px;
  width: 120px;
  margin-left: 5px;
`

export const IconLink = styled.a<{spacingRight?: string;}>`
  ${props => props.spacingRight && `margin-right: ${props.spacingRight};`}
  cursor: pointer;
  text-decoration: none;
  color: ${colors.black};
  font-size: 18px;
  font-weight: bold;
  transition: all .1s ease-in-out;

  &:hover {
    color: ${props => props.color};
  }
`


