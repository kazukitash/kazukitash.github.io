import { Game } from "@/models/game";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface CarouselItemProps {
  isActive: boolean;
  game: Game;
  setFeaturedGame: Dispatch<SetStateAction<Game>>;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  isActive,
  game,
  setFeaturedGame,
}) => {
  return (
    <Image
      onClick={() => setFeaturedGame(game)}
      src={`/${game.title}/thumbnail.png`}
      alt={game.title}
      width={1920}
      height={1080}
      sizes={"25vw"}
      className={`box-border border-t-2 basis-1/3 md:basis-auto md:border-t-0 md:border-l-2  ${
        isActive ? "border-accent" : "border-gray-400"
      }`}
    />
  );
};

export default CarouselItem;
