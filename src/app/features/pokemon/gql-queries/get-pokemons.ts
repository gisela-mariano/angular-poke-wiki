import { ResponseGetPokemons } from '@/app/models';
import { gql } from 'apollo-angular';

// TODO: adicionar paginação dinamica
const GET_POKEMONS = gql<ResponseGetPokemons, unknown>`
	query {
		pokemon(limit: 10) {
			id
			name
			order
			pokemontypes {
				type {
					name
				}
			}
			pokemonsprites {
				sprites
			}
		}
	}
`;

export { GET_POKEMONS };
