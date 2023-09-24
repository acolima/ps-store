export interface List {
  id: number;
  title: string;
  games: Game[];
}

export interface Game {
  id: number;
  title: string;
  price?: string;
  console_types?: string[];
  cover: string;
}
