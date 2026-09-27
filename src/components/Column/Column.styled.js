import styled from "styled-components";

export const ColumnRoot = styled.div`
  display: block;
  width: 20%;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const ColumnTitle = styled.div`
  margin: 15px 0;
  padding: 0 10px;

  p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const Cards = styled.div`
  position: relative;
  display: block;
  width: 100%;

  @media screen and (max-width: 1200px) {
    display: flex;
    overflow-x: auto;
  }
`;
