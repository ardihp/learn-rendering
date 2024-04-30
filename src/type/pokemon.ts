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
  types: PokemonType[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
  };
}
