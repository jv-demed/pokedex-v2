import axios from 'axios';
import { useState, useEffect } from 'react';

export const pokeApi = {
    pokeList: 'https://pokeapi.co/api/v2/pokemon/?limit=151',
    pokedex: 'https://pokeapi.co/api/v2/pokedex/1/',
    pokemon: 'https://pokeapi.co/api/v2/pokemon/',
    specie: 'https://pokeapi.co/api/v2/pokemon-species/'
}

const pokeObj = {
    pokedex: [{
        pokemon_entries: {
            pokemon_species: {
                name: ''
            }
        }
    }],
    pokeList: {
        results: []
    },
    pokemon: {
        name: '',
        sprites: {
            other: {
                ['official-artwork']: {
                    front_default: ''
                }
            }
        },
        types: []
    },
    specie: {

    }
}

export function getData(link, obj){
    const [data, setData] = useState(obj);
    useEffect(() => {
        axios.get(link).then((res) => setData(res.data))
    }, []);
    return data;
}

export function getPokedex(){
    return getData(pokeApi.pokedex, pokeObj.pokedex).pokemon_entries;
}

export function getPokeList(){
    return getData(pokeApi.pokeList, pokeObj.pokeList).results;
}

export function getPokemon(name){
    return getData(pokeApi.pokemon+name, pokeObj.pokemon);
}

export function getSpecie(name){
    return getData((pokeApi.specie+name), pokeObj.specie).pokemon_species;
}