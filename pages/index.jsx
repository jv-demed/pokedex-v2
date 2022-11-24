import { useState } from 'react';
import { getPokeList } from '../src/data/pokeApi';
import { SearchBar } from '../src/components/Headers/SearchBar';
import { PokeList } from '../src/components/PokeList/PokeList';

export default function Home(){

    const pokeList = getPokeList();
    const [search, setSearch] = useState('');

    if(pokeList){
        return(
            <>
                <SearchBar pokeList={pokeList} search={search} setSearch={setSearch} />
                <PokeList pokeList={pokeList} search={search} />
            </>
        )
    }
}