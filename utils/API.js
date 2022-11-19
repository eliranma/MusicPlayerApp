import {WS_URL} from "@env"


let BASE_URL = WS_URL
export const search = async (element)=>{
    let result;
// TOCHECK: Dont understand why but i have to handle the fetch promise twice....
    await fetch(BASE_URL+`searchSongs?songName=${element}`)
    .then((ires)=>{
        // console.log(ires)
        result = ires.json()
        // console.log(result);
        return result
    }).then((data)=>{
        // console.log(data)
        return data
    })
    .catch((err)=>console.log(err))
    return result
}