import styled, { css } from "styled-components";

export const NewOverlay = styled.div`
  position: absolute;
  z-index: 6;
  top: 0;
  left: 0;
  display: block;
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

export const NewOverlayContent = styled.div`
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

export const NewDialog = styled.div`
  position: relative;
  display: block;
  width: 100%;
  max-width: 630px;
  margin: 0 auto;
  padding: 40px 30px 48px;
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

export const NewContent = styled.div`
  display: block;
  text-align: left;
`;

export const NewTitle = styled.h3`
  margin-bottom: 20px;
  color: #000000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const NewClose = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const NewFormLayout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const NewForm = styled.form`
  display: block;
  width: 100%;
  max-width: 370px;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldLabel = styled.label`
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const InputBase = css`
  width: 100%;
  padding: 14px;
  outline: none;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  background: transparent;
  font-size: 14px;
  line-height: 1;

  &::placeholder {
    color: #94a6be;
    font-size: 14px;
    font-weight: 400;
    line-height: 1px;
  }
`;

export const TextInput = styled.input`
  ${InputBase}
  margin: 20px 0;
`;

export const DescriptionInput = styled.textarea`
  ${InputBase}
  max-width: 370px;
  height: 200px;
  margin-top: 14px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
`;

export const CategoryLabel = styled.p`
  margin-bottom: 14px;
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const categoryColors = {
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

export const CategoryOption = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  margin-right: 7px;
  padding: 8px 20px;
  border-radius: 24px;
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  ${({ $topic }) => categoryColors[$topic] || categoryColors["Web Design"]}
`;

export const CreateButton = styled.button`
  float: right;
  width: 132px;
  height: 30px;
  border: 0;
  border-radius: 4px;
  outline: none;
  background-color: #565eef;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;