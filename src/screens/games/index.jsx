import MediaCard from "../../components/cards";
import "./styles.css";
import { useEffect, useState } from "react";

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Games")
      .then((Response) => Response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="game-list-container">
      {games.map((game) => (
        <MediaCard key={game.id} title={game.title} description={game.description} />
      ))}
    </div> 
  );
}

export default Games;
