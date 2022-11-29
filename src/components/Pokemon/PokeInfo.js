import styled from 'styled-components';
import { firstUpperCase } from '../../scripts/stringFormatting';

const PokeInfoStyled = styled.div`
    align-items: center;
    flex-direction: column;
    display: flex;
    margin-top: 80px;
`

export function PokeInfo({ poke }){

    const name = firstUpperCase(poke.name);
    const sprite = !poke ? '' : poke.sprites.other['official-artwork'].front_default;

    return(
        <PokeInfoStyled>
            <h1>{name}</h1>
            <img src={sprite} />
        </PokeInfoStyled>
    )
}