import React ,{useState, createContext} from 'react'
import { SmallPlayer } from '../components'
import {Logo} from '../assets'

export const PlayerContext = createContext()


const PlayerProvider = ({children})=>{
    const [player, setPlayer] = useState({
        play:false,
        currentSong:'',
        currentTime:'00:00:00',
        totalSongTime:'00:00:00',
        playlist:[],
        artist:'',
        nextSong:'',
        smallCover:'',
        bigCover:'',
        mode:'small',
        album:''
    })
    
    return (
        <PlayerContext.Provider value={{player, setPlayer}}>
        {children}
        {player.mode=='small'?<SmallPlayer />:null}
        </PlayerContext.Provider>
    )
}
export default PlayerProvider