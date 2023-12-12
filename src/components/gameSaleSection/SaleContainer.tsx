import styled from "styled-components";
import LikeButton from "../LikeButton";

const StyledSaleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & span {
    border-left: 2px solid var(--red);
    padding-left: 0.25rem;
    font-size: 14px;
  }

  & h1,
  h2 {
    font-size: 32px;
    display: flex;
    justify-content: space-between;
  }
`;

export default function SaleContainer() {
  return (
    <StyledSaleContainer>
      <span>Nintendo Switch</span>
      <h1>Stardew Valley</h1>

      <h2>
        $14.99 <LikeButton />
      </h2>
    </StyledSaleContainer>
  );
}