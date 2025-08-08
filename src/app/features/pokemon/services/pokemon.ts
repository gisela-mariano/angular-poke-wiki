import { environment } from '@/environments/environment';
import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { PokemonData, ResponseGetPokemons } from '@app/models';
import { GET_POKEMONS } from '@features/pokemon/gql-queries';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PokemonService {
	private baseUrl = environment.pokeApiGraphqlBaseUrl;

	constructor(private apollo: Apollo) {}

	fetchPokemons(): Observable<ApolloQueryResult<ResponseGetPokemons>> {
		return this.apollo.watchQuery({
			context: { uri: this.baseUrl },
			query: GET_POKEMONS,
		}).valueChanges;
	}

	formatExternalPokemonData(
		data:
			| ResponseGetPokemons['pokemon'][number]
			| ResponseGetPokemons['pokemon'][number][]
	): PokemonData | PokemonData[] {
		if (data instanceof Array) {
			const pokemons = data.map(data => this.formatExternalPokemonData(data));

			return pokemons as PokemonData[];
		}

		const sprites = data.pokemonsprites[0].sprites;

		const types = data.pokemontypes.map(item => item.type) || [];

		return {
			id: data.id,
			name: data.name,
			order: data.order,
			sprites: {
				frontDefault: sprites?.front_default,
				backDefault: sprites?.back_default,
			},
			types,
		};
	}
}
