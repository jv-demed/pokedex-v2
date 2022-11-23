import styled from 'styled-components';
import { getData } from '../../data/pokeApi';
import { SpinLoading } from '../Loading/SpinLoading';
import { TypeBox } from './TypeBox';
import { firstUpperCase } from '../../scripts/stringFormatting';

const PokeBoxMobileStyled = styled.li`
    background: ${({ theme }) => theme.basics.white};
    border-radius: 5px;
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 5px 10px;
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
`

export function PokeBoxMobile({ url }){

    const poke = getData(url);
    const name = !poke ? '' : firstUpperCase(poke.name);
    const id = !poke ? '' : poke.id;
    const sprite = !poke ? '' : poke.sprites.other['official-artwork'].front_default;
    const types = !poke ? [] : poke.types;

    if(!poke){
        return(
            <PokeBoxMobileStyled>
                <SpinLoading size='50px' />
            </PokeBoxMobileStyled>
        )
    }

    return(
        <PokeBoxMobileStyled>
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
        </PokeBoxMobileStyled>
    )
}