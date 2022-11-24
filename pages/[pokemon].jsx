import { useRouter } from "next/router";
import styled from 'styled-components';
import { getData, pokeApi } from '../src/data/pokeApi';
import { Navigation } from '../src/components/Headers/Navigation';
import { PokeInfo } from '../src/components/Pokemon/PokeInfo';

const PokemonStyled = styled.section`

`

export default function Pokemon(){

    const urlName = useRouter().query.pokemon || 6;
    const poke = getData(pokeApi.pokemon+urlName);

    if(poke){
        return(
            <PokemonStyled className='container'>
                <Navigation poke={poke} />
                <PokeInfo poke={poke} />
            </PokemonStyled>
        )
    }
}