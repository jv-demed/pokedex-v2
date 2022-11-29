import styled from 'styled-components';
import { useMedia } from 'use-media';
import { PokeBox } from '../PokeBox/PokeBox';
import { PokeBoxMobile } from '../PokeBox/PokeBoxMobile';

const PokeListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    margin-top: 93px;
    padding-top: 15px;
`

export function PokeList({ pokeList, search }){

    const isMobile = useMedia({ maxWidth: 650 });

    return(
        <PokeListStyled className='container'>
            {pokeList.map((poke, i) => {
                if(poke.name.includes(search) || (i+1).toString().includes(search)){
                    return(
                        isMobile ?
                        <PokeBoxMobile key={i} pokeName={poke.name} />
                        :
                        <PokeBox key={i} pokeName={poke.name} />
                    )
                }
            })   
        }
        </PokeListStyled>
    )
}