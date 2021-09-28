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

export const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`

export const JobName = styled.div`
  font-size: 20px;
  color: ${colors.black};
`

export const JobTimeline = styled.div`
`

export const Position = styled.div`
  margin: 8px 0 20px 0;
  font-size: 20px;
  font-weight: bold;
`

export const Tech = styled.div`
  font-size: 20px;
`

export const JobDescription = styled.div`
  margin-top: 30px;
`

