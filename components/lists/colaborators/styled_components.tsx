import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Avatar = styled.img`
  color: turquoise;
  src: ${(props) => props.src};
  alt: "";
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
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
