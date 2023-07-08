import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = ({ data }) => {
  const [afra, setAfra] = useState("");
  return (
    <div className="container" onChange={(e) => setAfra(e.target.value)}>
      <input type="text" placeholder="Search Player..." />

      <div className="card-container">
        {data
          .filter((player) => player.name.includes(afra))
          .map(({ name, img, statistics }, index) => (
            <PlayerCard
              key={index}
              name={name}
              img={img}
              statictics={statistics}
            />
          ))}
      </div>
    </div>
  );
};

export default CardContainer;
