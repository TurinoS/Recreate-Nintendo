import { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--red);
  transition: 500ms;

  &:hover {
    background-color: var(--wine);
  }
`;

export default function Button({ children }: { children: ReactNode }) {
  return <StyledButton>{children}</StyledButton>;
}
