import { PokemonDispatchTypes, PokemonType, POKEMON_SUCCESS, POKEMON_LOADING, POKEMON_FAIL } from './../actions/PokemonActionsTypes';
interface DefaultStateI {
    loading: boolean,
    pokemon?: PokemonType
}

const INITIAL_STATE: DefaultStateI = {
    loading: false, 
};

const pokemonReducer = (state: DefaultStateI = INITIAL_STATE,  action: PokemonDispatchTypes) : DefaultStateI => {
    switch (action.type) {
        case POKEMON_LOADING:
            return {
                loading: true
            }
        case POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload
            }
        case POKEMON_FAIL:
            return {
                loading: false
            }
        default:
            return state;
    }
}

export default pokemonReducer

