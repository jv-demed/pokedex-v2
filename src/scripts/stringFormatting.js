export function firstUpperCase(string){
    return !string ? '' : string[0].toUpperCase() + string.substr(1);
}