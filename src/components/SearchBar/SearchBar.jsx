import styled from 'styled-components';
import { imgs } from '../../assets/imgs';

const SearchBarStyled = styled.div`
    background: rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    padding-top: 10px;
    position: fixed;
        left: 0;
        right: 0;
        top: 0;
    .bar{
        display: flex;
        img{
            background-color: ${({ theme }) => theme.basics.white};
            border-radius: 5px 0 0 5px;
            width: 40px;
        }
        input{
            border: none;
            border-radius: 0 5px 5px 0;
            font-size: 1.5rem;
            padding: 0 5px;
            width: 100%;
        }
        input:focus{
            outline: 0;
        }
    }
    .number{
        color: ${({ theme }) => theme.basics.white};
        font-size: 16pt;
        margin: 8px 4px 0;
    }
`

export function SearchBar({ pokeList, search, setSearch }){
    return(
        <SearchBarStyled className='container'>
            <div className='bar'>
                <img src={imgs.pokeball} />
                <input type='text' onChange={(e) => setSearch(e.target.value.toLowerCase())} />
            </div>
            <span className='number'>
                Pokémons encontrados: {pokeList.filter((poke, i) => {
                    return poke.name.includes(search) || (i+1).toString().includes(search);
                }).length}
            </span>
        </SearchBarStyled>
    )
}