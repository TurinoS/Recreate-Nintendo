"use client";

import Image from "next/image";
import styled from "styled-components";
import src from "../../../public/Stardew_valey_main_logo.jpg";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import Button from "../Button";

interface GameDescriptionContainerProps {
  readMore: boolean;
}

const GameDescriptionContainer = styled.section<GameDescriptionContainerProps>`
  display: flex;
  gap: 1rem;
  background-color: var(--white);
  padding: 112px 22.5%;

  & div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & h3 {
      font-size: 28px;
    }

    & p {
      font-weight: 300;
      line-height: 21px;
      font-size: 15px;
    }

    & .secondParagraph {
      display: ${(props) => (props.readMore ? "block" : "none")};
    }

    & button,
    button span {
      border: none;
      color: var(--red);
      display: flex;
      align-items: center;
      background-color: var(--white);
      font-size: 18px;
      font-weight: 600;
      gap: 4px;
      cursor: pointer;

      &:hover {
        color: var(--wine);
        transition: 300ms;
      }
    }

    & span {
      font-size: 12px;
      font-weight: 300;
    }
  }

  & img {
    border-radius: 24px;
  }
`;

export default function GameDescription() {
  const [readMore, setReadMore] = useState(false);
  return (
    <GameDescriptionContainer readMore={readMore}>
      <div>
        <h3>{"You're moving to the valley..."}</h3>
        <p>
          You’ve inherited your grandfather’s old farm plot in Stardew Valley.
          Armed with hand-me-down tools and a few coins, you set out to begin
          your new life. Can you learn to live off the land and turn these
          overgrown fields into a thriving home? It won’t be easy. Ever since
          Joja Corporation came to town, the old ways of life have all but
          disappeared. The community center, once the town’s most vibrant hub of
          activity, now lies in shambles. But the valley seems full of
          opportunity. With a little dedication, you might just be the one to
          restore Stardew Valley to greatness!
        </p>
        <p className="secondParagraph">
          Now with Multiplayer! Invite 1-3 players to join you in the valley!
          Players can work together to build a thriving farm, share resources,
          and build relationships with townspeople or each other. As more hands
          are better than one, players have the option to scale profit margin on
          produce sold for a more challenging experience.
        </p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? (
            <span>
              <FaMinus /> Read less
            </span>
          ) : (
            <span>
              <FaPlus /> Read more
            </span>
          )}
        </button>
        <span>Software description provided by the publisher.</span>
        <Button>{"Explore this game's official website"}</Button>
      </div>
      <Image
        src={src}
        alt="Stardew Valley main logo"
        width={540}
        height={300}
      />
    </GameDescriptionContainer>
  );
}
