import styled from 'styled-components';
import { getPokemon, getPokedex } from '../../src/data/pokeApi';
import { Navigation } from '../../src/components/Headers/Navigation';
import { PokeInfo } from '../../src/components/Pokemon/PokeInfo';

const PokemonStyled = styled.section`

`

export default function Pokemon({ pokemon }){

    const poke = getPokemon(pokemon);
    const pokedex = getPokedex();

    if(pokedex){
        return(
            <PokemonStyled className='container'>
                <Navigation poke={poke} length={pokedex.length} />
                <PokeInfo poke={poke} />
            </PokemonStyled>
        )
    }
}

export async function getServerSideProps(context){
    return {
        props: {pokemon: context.params.pokemon}
    }
}