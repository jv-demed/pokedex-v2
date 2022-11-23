import axios from 'axios';
import { useState, useEffect } from 'react';

export const pokeApi = {
    pokeList: 'https://pokeapi.co/api/v2/pokemon/?limit=151',
}

export function getData(link){
    const [data, setData] = useState();
    useEffect(() => {
        axios.get(link).then((res) => setData(res.data))
    }, []);
    return data;
}