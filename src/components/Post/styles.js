import styled from "styled-components";

export const Container = styled.article`
  opacity: ${(props) => props.removed ? 0.5 : 1}
`

export const Subtitle = styled.small`
  display: block;
`
export const Average = styled.span`
  font-size: 12px;
  opacity: 0.7;
`