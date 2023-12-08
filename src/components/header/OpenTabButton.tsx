"use client";

import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { ReactNode, useState } from "react";

const StyledButton = styled.button`
  color: var(--gray);
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  font-size: 18px;
  background: var(--white);

  &:hover {
    color: var(--red);
    transition: 500ms;
  }

  & span {
    font-size: 22px;
    margin-top: 6px;
  }

  & .open {
    transform: rotate(180deg);
    transition: 300ms;
  }

  & .close {
    transform: rotate(0deg);
    transition: 300ms;
  }

  & p {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export default function OpenTabButton({ children }: { children: ReactNode }) {
  const [openSelect, setOpenSelect] = useState(false);

  return (
    <StyledButton onClick={() => setOpenSelect(!openSelect)}>
      <p>{children}</p>
      <IoIosArrowDown className={openSelect ? "open" : "close"} />
    </StyledButton>
  );
}
