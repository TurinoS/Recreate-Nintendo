import styled from "styled-components";
import { BiHeart } from "react-icons/bi";

const StyledLikeButton = styled.button`
  color: var(--red);
  background-color: var(--white);
  border: none;
  cursor: pointer;
  transition: 500ms;

  & svg {
    font-size: 30px;
  }

  &:hover {
    color: var(--wine);
  }
`;

export default function LikeButton() {
  return (
    <StyledLikeButton>
      <BiHeart />
    </StyledLikeButton>
  );
}
