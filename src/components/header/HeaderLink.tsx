import styled from "styled-components";
import { ReactNode } from "react";

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 2px;
  text-decoration: none;
  color: var(--black);

  &:hover {
    color: var(--red);
    transition: 500ms;
  }
`;

export default function HeaderLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return <StyledLink href={href}>{children}</StyledLink>;
}
