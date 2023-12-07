"use client";

import { useState } from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const StyledInputDiv = styled.div`
  border-bottom: 2px solid var(--gray);
  padding-bottom: 0.1em;
  font-size: 24px;
  transition: 500ms;

  &:hover {
    border-color: var(--red);
    color: var(--red);
    transition: 500ms;
  }

  & input {
    border: none;
    padding: 0.2em;
    font-size: 18px;

    &:hover::-webkit-input-placeholder {
      color: red;
      transition: 500ms;
    }

    &:focus {
      outline: none;
    }
  }
`;

const FilterButton = styled.button`
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
`;

export default function SearchInput() {
  const [openSelect, setOpenSelect] = useState(false);

  return (
    <StyledInputDiv>
      <label htmlFor="search">
        <IoSearch />
      </label>
      <input type="search" id="search" name="search" placeholder="Search" />
      <FilterButton onClick={() => setOpenSelect(!openSelect)}>
        <p>Games</p>
        <IoIosArrowDown className={openSelect ? "open" : "close"} />
      </FilterButton>
    </StyledInputDiv>
  );
}
