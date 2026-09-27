import styled, { css, keyframes } from "styled-components";

const cardAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
`;

const topicColors = {
  "Web Design": css`
    background-color: #ffe4c2;
    color: #ff6d00;
  `,
  Research: css`
    background-color: #b4fdd1;
    color: #06b16e;
  `,
  Copywriting: css`
    background-color: #e9d4ff;
    color: #9a48f1;
  `,
};

export const CardItem = styled.div`
  padding: 5px;
  animation: ${cardAnimation} 500ms linear;
`;

export const CardSurface = styled.div`
  display: flex;
  width: 220px;
  height: 130px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  border-radius: 10px;
  background-color: #ffffff;
`;

export const CardGroup = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Topic = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: #ffe4c2;
  color: #ff6d00;
  ${({ $topic }) => topicColors[$topic] || topicColors["Web Design"]}

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

export const MoreLink = styled.a`
  color: inherit;
`;

export const MoreButton = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const CardContent = styled.div`
  display: flex;
  height: 64px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  margin-bottom: 10px;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    color: #94a6be;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 0.2px;
  }
`;
