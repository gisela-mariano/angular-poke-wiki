export type PokemonSprite = {
	backDefault?: string | null;
	backFemale?: string | null;
	backShiny?: string | null;
	backShinyFemale?: string | null;
	frontDefault?: string | null;
	frontFemale?: string | null;
	frontShiny?: string | null;
	frontShinyFemale?: string | null;
};

export type PokemonType = {
	name: string;
};

export type PokemonData = {
	id: number;
	name: string;
	order: number;
	sprites: PokemonSprite;
	types: PokemonType[];
};

export type ResponseGetPokemons = {
	pokemon: {
		id: number;
		order: number;
		name: string;
		pokemontypes: {
			type: {
				name: string;
			};
		}[];
		pokemonsprites: {
			sprites: {
				front_default: string;
				back_default: string;
			};
		}[];
	}[];
};
