import styled, { css } from "styled-components";

export const CalendarRoot = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  font-weight: 600;
  line-height: 25px;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  display: flex;
  width: 18px;
  height: 25px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    fill: #94a6be;
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const DayNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const CalendarCells = styled.div`
  display: flex;
  width: 182px;
  height: 126px;
  flex-wrap: wrap;

  @media screen and (max-width: 660px) {
    display: flex;
    width: 344px;
    height: auto;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const CalendarCell = styled.div`
  display: flex;
  width: 22px;
  height: 22px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin: 2px;
  border-radius: 50%;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  opacity: ${({ $otherMonth }) => ($otherMonth ? 0 : 1)};
  font-weight: ${({ $current }) => ($current ? 700 : 400)};

  ${({ $otherMonth }) =>
    !$otherMonth &&
    css`
      &:hover {
        color: #94a6be;
        background-color: #eaeef6;
      }
    `}

  ${({ $active }) =>
    $active &&
    css`
      background-color: #94a6be;
      color: #ffffff;
    `}

  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarText = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const CalendarValue = styled.span`
  color: #000000;
`;
