import styled, { css } from "styled-components";

export const BrowseOverlay = styled.div`
  position: absolute;
  z-index: 7;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  min-width: 375px;
  min-height: 100vh;

  &:target {
    display: block;
  }

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const BrowseOverlayContent = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    justify-content: flex-start;
    padding: 0;
  }
`;

export const BrowseDialog = styled.div`
  position: relative;
  display: block;
  width: 100%;
  max-width: 630px;
  margin: 0 auto;
  padding: 40px 30px 38px;
  border: 0.7px solid #d4dbe5;
  border-radius: 10px;
  background-color: #ffffff;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const BrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const BrowseTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  @media screen and (max-width: 495px) {
    & > div {
      display: none;
    }
  }
`;

export const BrowseTitle = styled.h3`
  color: #000000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
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

export const BrowseTopic = styled.div`
  display: block;
  width: auto;
  height: 30px;
  margin-right: 7px;
  padding: 8px 20px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  ${({ $topic }) => topicColors[$topic] || topicColors["Web Design"]}
`;

export const BrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const BrowseStatusLabel = styled.p`
  margin-bottom: 14px;
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const BrowseStatusList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const BrowseStatusOption = styled.div`
  margin-right: 7px;
  margin-bottom: 7px;
  padding: 11px 14px 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 24px;
  color: #94a6be;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  display: ${({ $hidden }) => ($hidden ? "none" : "block")};
  ${({ $active }) => $active && css`
    border-color: #94a6be;
    background: #94a6be;
    color: #ffffff;
  `}
`;

export const BrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const BrowseForm = styled.form`
  display: block;
  width: 100%;
  max-width: 370px;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const BrowseFormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BrowseFieldLabel = styled.label`
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const BrowseTextArea = styled.textarea`
  width: 100%;
  max-width: 370px;
  height: 200px;
  margin-top: 14px;
  padding: 14px;
  outline: none;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  background: #eaEEF6;
  font-size: 14px;
  line-height: 1;

  &::placeholder {
    color: #94a6be;
    font-size: 14px;
    font-weight: 400;
    line-height: 1px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const BrowseTopicLabel = styled.p`
  margin-bottom: 14px;
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const BrowseBottomCategory = styled.div`
  display: none;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    display: block;
  }
`;

export const BrowseActions = styled.div`
  display: ${({ $hidden }) => ($hidden ? "none" : "flex")};
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  @media screen and (max-width: 495px) {
    button {
      width: 100%;
      height: 40px;
    }

    & > div {
      width: 100%;
    }
  }
`;

export const BrowseButtons = styled.div`
  display: flex;
  flex-wrap: wrap;

  button {
    margin-right: 8px;
  }

  @media screen and (max-width: 495px) {
    button {
      margin-right: 0;
    }
  }
`;

const BrowseButtonBase = css`
  border-radius: 4px;
  outline: none;
  font: inherit;

  a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const BrowseEditButton = styled.button`
  ${BrowseButtonBase}
  border: 0.7px solid #565eef;
  background: transparent;
  color: #565eef;

  a {
    color: #565eef;
  }

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }

  &:hover a {
    color: #ffffff;
  }
`;

export const BrowseCloseButton = styled.button`
  ${BrowseButtonBase}
  border: none;
  background: #565eef;
  color: #ffffff;

  a {
    color: #ffffff;
  }

  &:hover {
    background-color: #33399b;
  }
`;