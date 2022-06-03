import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Avatar = styled.img`
  color: turquoise;
  src: ${(props) => props.src};
  alt: "avatar image";
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const Accordion = styled.div`
  width: 300px;
`;

export const Title = styled.div`
  color: #85662b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameTitle = styled.div`
  color: red;
`;

export const Description = styled.div`
  display: flex;
`;

export const Name = styled.div`
  color: black;
`;

export const Cards = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  color: black;
`;

export const CardTitle = styled.div`
  color: black;
`;

export const CardDesc = styled.div`
  color: black;
`;

export const BtnAction = styled.button`
  color: black;
`;

export const BtnLoad = styled.button`
  width: 100%;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
`;

export const ContentShow = styled.div`
  color: #8b7f75;
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);

  ${({ isSelected }) =>
    isSelected &&
    css`
      height: auto;
      max-height: 9999px;
      transition: all 0.5s cubic-bezier(1, 0, 1, 0);
    `};
`;
