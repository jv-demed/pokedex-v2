import Link from 'next/link';
import styled from 'styled-components';
import { getPokemon } from '../../data/pokeApi';
import { SpinLoader } from '../Loading/SpinLoader';
import { TypeBox } from './TypeBox';
import { firstUpperCase } from '../../scripts/stringFormatting';

const PokeBoxStyled = styled.li`
    background: ${({ theme }) => theme.basics.white};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    width: 19%;
    .infoDex{
        align-items: center;
        display: flex;
        font-size: 1.25rem;
        justify-content: space-between;
        .number{
            font-size: 0.9rem;
        }
    }
    img{
        width: 100%;
    }
    .types{
        display: flex;
        gap: 5px;
        justify-content: center;
    }
    @media(max-width: 960px){
        width: 23%;
    }
`

export function PokeBox({ pokeName }){

    const poke = getPokemon(pokeName);
    const name = !poke ? '' : firstUpperCase(poke.name);
    const id = !poke ? '' : poke.id;
    const sprite = !poke ? '' : poke.sprites.other['official-artwork'].front_default;
    const types = !poke ? [] : poke.types;

    if(poke){
        return(
            <PokeBoxStyled>
                <Link href={poke.name}>
                    <div className="infoDex">
                        <span>{name}</span>
                        <span className='number'>#{id}</span>
                    </div>
                    <img src={sprite} />
                    <div className='types'>
                        {types.map((type, i) => {
                            return(
                                <TypeBox key={name+'Type'+(i+1)} name={type.type.name} />
                            )
                        })}
                    </div>
                </Link>
            </PokeBoxStyled>
        )
    }else{
        return(
            <PokeBoxStyled>
                <SpinLoader size='50px' />
            </PokeBoxStyled>
        )
    }
}