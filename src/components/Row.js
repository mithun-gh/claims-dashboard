import styled from "styled-components";

export const Row = styled.div.attrs(() => ({ className: "row" }))`
  margin: 12px 0;

  font-weight: ${(props) => (props.header ? "900" : "300")};

  & .col {
    display: inline-block;
  }
`;
