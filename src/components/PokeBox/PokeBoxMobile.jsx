import Link from 'next/link';
import styled from 'styled-components';
import { getPokemon } from '../../data/pokeApi';
import { SpinLoader } from '../Loading/SpinLoader';
import { TypeBox } from './TypeBox';
import { firstUpperCase } from '../../scripts/stringFormatting';

const PokeBoxMobileStyled = styled.li`
    background: ${({ theme }) => theme.basics.white};
    border-radius: 5px;
    padding: 5px 10px;
    width: 100%;
    .link{
        display: flex;
        justify-content: space-between;
        height: 80px;
        width: 100%;
        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            width: 100%;
            .infoDex{
                .number{
                    font-size: 1.2rem;
                }
                align-items: center;
                display: flex;
                font-size: 1.6rem;
                gap: 15px;
            }
            .types{
                display: flex;
                gap: 5px;
                height: 25px;
                justify-content: center;
            }
        }
        img{
            height: 100%;
            padding-left: 10px;
        }
    }
`

export function PokeBoxMobile({ pokeName }){

    const poke = getPokemon(pokeName);
    const name = !poke ? '' : firstUpperCase(poke.name);
    const id = !poke ? '' : poke.id;
    const sprite = !poke ? '' : poke.sprites.other['official-artwork'].front_default;
    const types = !poke ? [] : poke.types;

    if(poke){
        return(
            <PokeBoxMobileStyled>
                <Link className='link' href={poke.name}>
                    <div className="info">
                        <div className="infoDex">
                            <span className='number'>#{id}</span>
                            <span>{name}</span>
                        </div>
                        <div className='types'>
                            {types.map((type, i) => {
                                return(
                                    <TypeBox key={name+'Type'+(i+1)} name={type.type.name} />
                                )
                            })}
                        </div>
                    </div>
                    <img src={sprite} />
                </Link>
            </PokeBoxMobileStyled>
        )
    }else{
        return(
            <PokeBoxMobileStyled>
                <SpinLoader size='50px' />
            </PokeBoxMobileStyled>
        )
    }
}