"use client";

import Image from "next/image";
import Link from "next/link";
import CarouselItem from "./carousel_item";
import { Game } from "@/models/game";
import { useEffect, useRef, useState } from "react";
import { games } from "@/constants/games";

const Carousel = () => {
  const [featuredGame, setFeaturedGame] = useState<Game>(games[0]);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const startAutoSelect = () => {
    if (timer.current === null) {
      timer.current = setInterval(() => {
        const i = featuredGame.index;
        const newIndex = i + 1 < games.length ? i + 1 : 0;
        setFeaturedGame(games[newIndex]);
      }, 5000);
    }
  };

  const stopAutoSelect = () => {
    if (timer.current !== null) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => {
    startAutoSelect();

    return () => stopAutoSelect();
  });

  return (
    <div
      onMouseOver={stopAutoSelect}
      onMouseOut={startAutoSelect}
      className="box-border w-full bg-gray-400 flex flex-col md:flex-row"
    >
      <div className="md:basis-3/4">
        <Link
          key={featuredGame.title}
          href={featuredGame.link}
          id={featuredGame.title}
          className="block w-full"
        >
          <Image
            src={`/${featuredGame.title}/featured.png`}
            alt={featuredGame.title}
            width={1920}
            height={1080}
            sizes={"75vw"}
            className="block w-full h-auto"
          />
        </Link>
      </div>
      <div className="flex flex-row md:flex-col justify-center md:basis-1/4 w-full md:w-auto">
        {games.map((game) => (
          <CarouselItem
            key={game.index}
            isActive={game.index == featuredGame.index}
            game={game}
            setFeaturedGame={setFeaturedGame}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
