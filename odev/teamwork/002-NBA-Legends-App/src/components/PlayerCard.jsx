import { useState } from "react";

const PlayerCard = ({ name, img, statictics }) => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="player" onClick={handleToggle}>
      {toggle ? (
        <div className="playerCard">
          <img src={img} alt="img" />
        </div>
      ) : (
        <ul>
         
          {statictics.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      )}

      <h1>{name}</h1>
    </div>
  );
};

export default PlayerCard;
