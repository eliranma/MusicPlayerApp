import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import ProgressBar from './ProgressBar';
import {PlayerContext} from '../context/PlayerContext';
import { msToTime } from '../utils';


const PlayerProgress = ({song}) => {
  const {player} = useContext(PlayerContext);
  return (
    <View>
      <ProgressBar total={song.time} />
      <View style={styles.playerProgress}>
        <Text>{msToTime(player.currentTime)}</Text>
        <Text>{msToTime(song.time)}</Text>
      </View>
    </View>
  );
};

export default PlayerProgress;

const styles = StyleSheet.create({
  playerProgress: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
  },
});
