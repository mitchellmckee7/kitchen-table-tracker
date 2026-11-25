import history from "../assets/games.json";
import "../styles/App.css";
import type { Game } from "../models/IGame";

function Legend( ) {
  const games:Game[] = history;

  return (
    <div className="player-legend-container">
      <h2>Match History</h2>
      {games.map(game => (
        <div key={game.id} className="legend-item">
          <div>{game.players[game.winner]} won!</div>
          <div>Pod: {game.players.toSpliced(game.winner, 1).map(game => game + '; ' )}</div>
        </div>
      ))}
    </div>
  );
}

export default Legend;
