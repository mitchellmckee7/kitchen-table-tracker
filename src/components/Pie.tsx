import history from "../assets/games.json";
import "../App.css";

interface Game {
  id: number;
  players: string[];
  winner: number;
  seatOrder: boolean;
  date: string;
  length: number;
}

type Props = {
  threshold: number;
};

function Pie( { threshold }: Props ) {
  const games:Game[] = history;
  const allPlayers = games.flatMap((game) => game.players)
  const playerStats: Record<string, number> = {};

  allPlayers.forEach((player) => {
    playerStats[player] = (playerStats[player] || 0) + 1;
  });

  const minGames = threshold

  const sortedPlayerStats = Object.fromEntries(
    Object.entries(playerStats)
      .filter(([, games]) => games >= minGames)
      .sort((a, b) => b[1] - a[1])
  );

  const totalGames = Object.values(sortedPlayerStats).reduce(
  (sum, games) => sum + games,
  0
);

const colors = [
  "#3B82F6",
  "#EF4444",
  "#22C55E",
  "#EAB308",
  "#A855F7",
  "#EC4899",
  "#14B8A6",
  "#F97316",
];

let currentPercentage = 0;

const gradient = Object.entries(sortedPlayerStats)
  .map(([_, games], index) => {
    const percentage = (games / totalGames) * 100;
    const start = currentPercentage;
    currentPercentage += percentage;

    return `${colors[index % colors.length]} ${start}% ${currentPercentage}%`;
  })
  .join(", ");

  return (
    <div className="pie-chart-container">
      <span className="pie-chart-label">Meta Composition</span>
      <div className="pie-chart" style={{
        background: `conic-gradient(${gradient})`,
        }}>
      </div>
    </div>
  );
}

export default Pie;
