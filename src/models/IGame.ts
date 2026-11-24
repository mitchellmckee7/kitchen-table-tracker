export interface Game {
  id: number;
  players: string[];
  winner: number;
  seatOrder: boolean;
  date: string;
  length: number;
}