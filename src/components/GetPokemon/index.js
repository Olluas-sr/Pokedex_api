const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'

async function getPokemon(pokemonId) {
    const response = await fetch(`${apiUrl}${pokemonId}`)
    return await response.json()
}

console.log(await getPokemon(1));

async function setPokemomData(id){
    
    await getPokemon(id).then(pokeData =>{
        const pokemonInfo = {
            sprites:pokeData.sprites.front_default,
            name:pokeData.name,       
            moves:pokeData.moves,      
            type: pokeData.types,
            abilities: pokeData.abilities
    }
    console.log(pokemonInfo);
    })}

setPokemomData(2)


export {setPokemomData}