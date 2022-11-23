import styled from 'styled-components';
import { useMedia } from 'use-media';
import { pokeApi, getData } from '../../data/pokeApi';
import { PokeBox } from '../PokeBox/PokeBox';
import { PokeBoxMobile } from '../PokeBox/PokeBoxMobile';
import { SpinLoading } from '../Loading/SpinLoading';

const PokeListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    margin-top: 120px;
`

export function PokeList(){

    const pokeList = getData(pokeApi.pokeList);
    const isMobile = useMedia({ maxWidth: 650 });

    return(
        <PokeListStyled className='container'>
            {pokeList ?
                pokeList.results.map((poke, i) => {
                    return(
                        isMobile ?
                        <PokeBoxMobile key={i} url={poke.url} />
                        :
                        <PokeBox key={i} url={poke.url} />
                    )
                })
                :
                <SpinLoading size='150px' />
            }
        </PokeListStyled>
    )
}