import styled from 'styled-components';
import { firstUpperCase } from '../../scripts/stringFormatting';

const PokeBoxIconStyled = styled.a`
    border-left: ${ props  => props.page ? '1px solid gray' : 'none'};
    border-right: ${ props  => props.page ? '1px solid gray' : 'none'};
    align-items: center;
    color: ${({ theme }) => theme.basics.white};
    display: flex;
    gap: 15px;
    justify-content: center;
    width: 100%;
    img{
        width: 40px;
    }
    @media(max-width: 650px){
        span{
            display: none;
        }
        img{
            width: 50px;
        }
    }
`

export function PokeBoxIcon({ poke, page }){

    const pokeIcon = poke.sprites.front_default;

    if(pokeIcon){
        return(
            <PokeBoxIconStyled href={poke.name} page={page}>
                <span>#{poke.id} - {firstUpperCase(poke.name)}</span>
                <img src={pokeIcon} alt={`icon-${poke.name}`} />
            </PokeBoxIconStyled>
        )
    }
}