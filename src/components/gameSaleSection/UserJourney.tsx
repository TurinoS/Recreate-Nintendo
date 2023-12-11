import styled from "styled-components";

const StyledJourney = styled.div`
  display: flex;
  gap: 8px;
  font-size: 14px;
  margin-bottom: 16px;

  & a {
    text-decoration: none;
    color: var(--black);
    font-weight: 500;
  }

  & span {
    color: var(--gray);
  }

  & p {
    font-weight: 700;
  }
`;

export default function UserJourney() {
  return (
    <StyledJourney>
      <a href="#">Store</a>
      <span>&gt;</span>
      <a href="#">Games</a>
      <span>&gt;</span>
      <p>Stardew Valley</p>
    </StyledJourney>
  );
}
