import styled, { keyframes } from "styled-components";

export const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Dot = styled.div`
  background-color: ${({ theme }) => theme.primaryDark};
  border-radius: 50%;
  width: 100%;
  height: 10px;
  
  animation: ${BounceAnimation} 1s linear infinite;
  animation-delay: ${props => props.delay};
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerPage = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  margin: auto;
  border-left: 4px solid white;
  background: transparent;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50%;
`;