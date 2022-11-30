import { useState } from 'react';
import { getPokeList } from '../src/data/pokeApi';
import { SearchBar } from '../src/components/Headers/SearchBar';
import { PokeList } from '../src/components/PokeList/PokeList';
import axios from 'axios';

export default function Home({ pokeList }){

    //const pokeList = getPokeList();
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
  
export async function getStaticProps(){
    const pokeList = await getPokeList();
    return {
        props: {
            pokeList: pokeList.results
        }
    };
};