import { useState } from 'react';
import { pokeApi, getData } from '../src/data/pokeApi';
import { SearchBar } from '../src/components/SearchBar/SearchBar';
import { PokeList } from '../src/components/PokeList/PokeList';

export default function Home(){

    const pokeList = getData(pokeApi.pokeList);
    const [search, setSearch] = useState('');

    return(
        pokeList ?
        <>
            <SearchBar pokeList={pokeList.results} search={search} setSearch={setSearch} />
            <PokeList pokeList={pokeList.results} search={search} />
        </>
        :
        <></>
    )
}