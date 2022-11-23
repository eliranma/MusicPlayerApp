import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  PlayerButtonsContainer,
  PlayerCover,
  PlayerDetails,
  PlayerProgress,
} from '../components';
import {PlayerContext} from '../context/PlayerContext';

const PlayerScreen = () => {
  const {player, setPlayer} = useContext(PlayerContext);
  useEffect(()=>{
    setPlayer({...player,mode:'big'})
    return ()=>setPlayer({...player, mode:'small'})
  },[player.mode])
  const handleBackward = {
    long: () => {},
    short: () => {},
  };

  const handleForward = {
    long: () => {
      setPlayer({...player, currentTime: player.currentTime + 15000});
    },
    short: () => {
      setPlayer({
        ...player,
        currentSong: player.playlist.indexOf(song=>song.name == player.currentSong, i),
        currentTime: 0,
        total: player.playlist[1].time,
        playlist: player.playlist.splice(0, 1),
      });
    },
  };
  const handlePlay = ()=>{
    if(player.play){
    setPlayer({...player, play:false})
    }
    else{
    setPlayer({...player, play:true})
    }
  }

  return (
    <View style={{display:'flex', flex:1, justifyContent:'center'}}>
      <PlayerDetails
        songName={player.currentSong}
        artist={player.artist}
        album={player.album}
      />
      <PlayerCover cover={player.bigCover} />
      <PlayerProgress song={{time:player.totalSongTime}} />
      <PlayerButtonsContainer play={player.play} handlePlay={handlePlay} handleForward={handleForward} handleBackward={handleBackward}/>
    </View>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({});
