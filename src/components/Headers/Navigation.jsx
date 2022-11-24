import styled from 'styled-components';
import { pokeApi, getData, getPokeList, getPokedex } from '../../data/pokeApi';
import { firstUpperCase } from '../../scripts/stringFormatting';

const NavigationStyled = styled.div`
    background: rgba(0,0,0,0.4);
    color: ${({ theme }) => theme.basics.white};
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    padding-top: 10px;
    position: fixed;
        left: 0;
        right: 0;
        top: 0;
`

export function Navigation({ poke }){

    const pokedex = getPokedex();
    const name = firstUpperCase(poke.name);

    // function getPreviousPoke(id){
    //     const previousPoke = {
    //         id: pokedex[poke.id-2].entry_number,
    //         name: firstUpperCase(pokedex[poke.id-2].pokemon_species.name)
    //     }
    //     if(id-1 != 0){
    //         return previousPoke
    //     }
    // }

    if(pokedex){
        return(
            <NavigationStyled className='container'>
                {/* <span>#{pokedex[poke.id-2].entry_number} {pokedex[poke.id-2].pokemon_species.name}</span> */}
                {/* <span>#{pokedex[poke.id-2].entry_number} {pokedex[poke.id-2].pokemon_species.name}</span> */}
                <span>#{poke.id} {name}</span>
                {/* <span>#{pokedex[poke.id].entry_number} {pokedex[poke.id].pokemon_species.name}</span> */}
            </NavigationStyled>
        )
    }
}