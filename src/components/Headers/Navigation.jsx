import styled from 'styled-components';
import { getPokedex, getPokemon } from '../../data/pokeApi';
import { firstUpperCase } from '../../scripts/stringFormatting';
import { PokeBoxIcon } from '../PokeBox/PokeBoxIcon';

const NavigationStyled = styled.div`
    background: rgba(0,0,0,0.4);
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    padding-top: 10px;
    position: fixed;
        left: 0;
        right: 0;
        top: 0;
`

export function Navigation({ poke, length }){

    const pokedex = getPokedex();
    const prevPoke = poke.id == 1 ? getPokemon(length): getPokemon(poke.id-1);
    const nextPoke = poke.id == length ? getPokemon(1) : getPokemon(poke.id+1);

    if(pokedex){
        return(
            <NavigationStyled className='container'>
                <PokeBoxIcon poke={prevPoke} />
                <PokeBoxIcon poke={poke} page={true} />
                <PokeBoxIcon poke={nextPoke} />
            </NavigationStyled>
        )
    }
}