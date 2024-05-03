export interface PokemonList {
  name: string;
  url: string;
}

export interface PokemonDetail {
  name: string;
  id: number;
  order: number;
  weight: number;
  height: number;
  base_experience: number;
  types: PokemonType[];
  stats: PokemonStat[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}
