"use client";

import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import OpenTabButton from "./OpenTabButton";

const StyledInputDiv = styled.div`
  border-bottom: 2px solid var(--black);
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

export default function SearchInput() {
  return (
    <StyledInputDiv>
      <label htmlFor="search">
        <IoSearch />
      </label>
      <input type="search" id="search" name="search" placeholder="Search" />
      <OpenTabButton>Games</OpenTabButton>
    </StyledInputDiv>
  );
}
