interface DefaultStateI {

}

const defaultState: DefaultStateI = {

};

const pokemonReducer = (state: DefaultStateI = defaultState,  action : any) : DefaultStateI => {
    return state
}

export default pokemonReducer

