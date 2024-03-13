import Marquee from "react-fast-marquee";
import { Guild } from "@/types";

interface CardProps {
  server: Guild;
  isLast?: boolean;
}

interface CarouselProps {
  servers: Guild[];
}

function capitalizeWords(string: string) {
  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const Card = ({ server, isLast }: CardProps) => {
  return (
    <div className={`bg-secondary rounded-lg p-2 h-8 w-auto flex items-center ${isLast ? 'mr-4' : ''}`}>
      <p className="text-base font-normal font-highlight">
        {capitalizeWords(server.name)}
      </p>
    </div>
  );
};

export default function Carousel({ servers }: CarouselProps) {
  const half = Math.ceil(servers.length / 2);
  const firstHalfServers = servers.slice(0, half);
  const secondHalfServers = servers.slice(half);

  return (
    <>
      <Marquee
        speed={60}
        direction="left" 
        gradient
        gradientColor="rgb(25,26,30,0.9)"
        gradientWidth={50}
      >
        <div className="flex gap-4">
          {firstHalfServers.map((server) => (
            <Card key={server.id} server={server} />
          ))}
        </div>
      </Marquee>

      <Marquee
        speed={60}
        direction="right"
        gradient
        gradientColor="rgb(25,26,30,0.9)"
        gradientWidth={50}
      >
        <div className="flex gap-4">
          {secondHalfServers.map((server, index) => (
            <Card key={server.id} server={server} isLast={index === firstHalfServers.length - 1} />
          ))}
        </div>
      </Marquee>
    </>
  );
}
