import styled from "@emotion/styled";

export const Avatar = styled.img`
  color: turquoise;
  src: ${(props) => props.src};
  alt: "";
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
`;
