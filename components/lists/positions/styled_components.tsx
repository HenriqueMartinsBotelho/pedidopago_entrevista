import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div`
  color: black;
`;

export const Accordion = styled.div`
  width: 100%;
`;

export const Item = styled.div`
  padding: 10px 20px;
  margin-bottom: 10px;
  border: 2px solid #eaefed;
  border-radius: 8px;
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
  color: green;
`;

export const Description = styled.div`
  display: flex;
`;

export const Symbol = styled.div`
  color: green;
`;

export const ContentShow = styled.div`
  color: #8b7f75;
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);

  ${({ s }) =>
    s &&
    css`
      height: auto;
      max-height: 9999px;
      transition: all 0.5s cubic-bezier(1, 0, 1, 0);
    `};
`;

export const Cards = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: aliceblue; ;
`;

export const CardTitle = styled.div`
  background: aliceblue; ;
`;

export const CardContent = styled.div`
  background: aliceblue; ;
`;

export const Btn = styled.button`
  width: 100%;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
`;
