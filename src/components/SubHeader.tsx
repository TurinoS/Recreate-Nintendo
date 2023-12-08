"use client";

import styled from "styled-components";
import { FaTruckArrowRight } from "react-icons/fa6";
import { LuCoins } from "react-icons/lu";

const StyledSubHeader = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--light-gray);
  padding: 10px;

  & div {
    display: flex;
    gap: 4px;
    border-right: 1px solid var(--black);
    padding-right: 16px;

    &:last-child {
      border-right: none;
      padding-right: 0;
      padding-left: 16px;
    }
  }

  & svg {
    color: var(--red);
    margin-right: 8px;
  }

  & a {
    color: var(--black);
  }

  & span {
    font-weight: 600;
    text-decoration: underline;
    margin: 0 5px;
  }
`;

export default function SubHeader() {
  return (
    <StyledSubHeader>
      <div>
        <FaTruckArrowRight />
        <p>
          <strong>Free shipping </strong>
          on orders $50 or more.
        </p>
        <a href="#">Restrictions apply</a>.
      </div>
      <div>
        <LuCoins />
        <p>
          Earn
          <span>My Nintendo Points</span>
          on digital games
        </p>
      </div>
    </StyledSubHeader>
  );
}
