import styled from "styled-components";

export const PurpleUICircleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

export const GreenUICircleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;

  @media (max-width: 720px) {
    display: none;
  }
`;
