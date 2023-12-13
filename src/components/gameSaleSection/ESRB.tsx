import Image from "next/image";
import styled from "styled-components";
import ESRBimage from "../../../public/ESRB-10+.png";

const ESRBdiv = styled.div`
  display: flex;
  padding: 1.5rem 0;
  width: 380px;
  font-size: 12px;
  gap: 15px;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & p {
      border-bottom: solid 1px var(--black);
      padding-bottom: 6px;
    }

    & span {
      padding-top: 6px;
    }
  }
`;

export default function ESRB() {
  return (
    <ESRBdiv>
      <Image
        src={ESRBimage}
        alt="ESRB video game content rating in which recommends a video game to those 10+"
        width={50}
        height={70}
      />
      <div>
        <p>
          Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling,
          Mild Language, Mild Blood
        </p>
        <span>Users Interact</span>
      </div>
    </ESRBdiv>
  );
}
