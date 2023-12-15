import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

type ButtonProps = {
  children: ReactNode;
  fontSize: string;
};

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.05);
  }
  75% {
    transform: scale(1.075);
  }
  100% {
    transform: scale(1.05);
  }
`;

const StyledButton = styled.a<ButtonProps>`
  background-color: var(--red);
  transition: 600ms;
  border: none;
  border-radius: 0.9rem;
  padding: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--white);
  font-size: ${(props) => props.fontSize};
  cursor: pointer;

  &:hover {
    background-color: var(--wine);
    animation: ${pulse} 600ms;
    transform: scale(1.05);
  }
`;

export default function Button({ children, fontSize }: ButtonProps) {
  return <StyledButton fontSize={fontSize}>{children}</StyledButton>;
}
