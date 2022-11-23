import styled from 'styled-components';
import { firstUpperCase } from '../../scripts/stringFormatting';

const TypeBoxStyled = styled.div`
    align-items: center;
    background-color: ${props => props.bgType};
    border-radius: 3px;
    color: ${props => props.colorType};
    display: flex;
    font-size: 0.7rem;
    justify-content: center;
    line-height: 18px;
    width: 75px;
    @media(max-width: 650px){
        font-size: 0.9rem;
        width: 100%;
    }
`

function typeDefinition(name){
    const type = {name: firstUpperCase(name)};
    switch(name){
        case 'bug': return {...type, bg: ({ theme }) => theme.types.bug, color: true};
        case 'dark': return {...type, bg: ({ theme }) => theme.types.dark, color: true};
        case 'dragon': return {...type, bg: ({ theme }) => theme.types.dragon, color: true};
        case 'electric': return {...type, bg: ({ theme }) => theme.types.electric, color: false};
        case 'fairy': return {...type, bg: ({ theme }) => theme.types.fairy, color: false};
        case 'fighting': return {...type, bg: ({ theme }) => theme.types.fighting, color: true};
        case 'fire': return {...type, bg: ({ theme }) => theme.types.fire, color: true};
        case 'flying': return {...type, bg: ({ theme }) => theme.types.flying, color: false};
        case 'ghost': return {...type, bg: ({ theme }) => theme.types.ghost, color: true};
        case 'grass': return {...type, bg: ({ theme }) => theme.types.grass, color: false};
        case 'ground': return {...type, bg: ({ theme }) => theme.types.ground, color: true};
        case 'ice': return {...type, bg: ({ theme }) => theme.types.ice, color: false};
        case 'normal': return {...type, bg: ({ theme }) => theme.types.normal, color: false};
        case 'poison': return {...type, bg: ({ theme }) => theme.types.poison, color: true};
        case 'psychic': return {...type, bg: ({ theme }) => theme.types.psychic, color: true};
        case 'rock': return {...type, bg: ({ theme }) => theme.types.rock, color: true};
        case 'steel': return {...type, bg: ({ theme }) => theme.types.steel, color: false};
        case 'water': return {...type, bg: ({ theme }) => theme.types.water, color: true};
    }
}

function colorTypeDefinition(color){
    if(color){
        return ({ theme }) => theme.basics.white;
    }
    return ({ theme }) => theme.basics.black;
}

export function TypeBox({ name }){

    const type = typeDefinition(name);
    const colorType = colorTypeDefinition(type.color);

    return(
        <TypeBoxStyled bgType={type.bg} colorType={colorType}>
            {type.name}
        </TypeBoxStyled>
    )
}