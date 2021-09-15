import axios from "axios";
import { Dispatch } from "redux";
import { PokemonDispatchTypes, POKEMON_LOADING, POKEMON_SUCCESS, POKEMON_FAIL } from "./PokemonActionsTypes";

export const getPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
 try {
    dispatch({
        type: POKEMON_LOADING,
    })

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    dispatch({
        type: POKEMON_SUCCESS,
        payload: res.data
    })

 } catch (error) {
    dispatch({
        type: POKEMON_FAIL,
    })
 }
}