import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import ProgressBar from './ProgressBar';
import {PlayerContext} from '../context/PlayerContext';

const PlayerProgress = ({song}) => {
  const {player} = useContext(PlayerContext);
  return (
    <View>
      <ProgressBar total={song.time} />
      <View style={styles.playerProgress}>
        <Text>{player.currentTime}</Text>
        <Text>{song.time}</Text>
      </View>
    </View>
  );
};

export default PlayerProgress;

const styles = StyleSheet.create({
  playerProgress: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
