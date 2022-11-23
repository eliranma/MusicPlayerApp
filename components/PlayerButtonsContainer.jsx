import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBackward,
  faFastForward,
  faPause,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';

const PlayerButtonsContainer = ({play,handlePlay, handleForward, handleBackward}) => {
  return (
    <View
      style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleBackward.short} onLongPress={()=>handleBackward.long}>
        <FontAwesomeIcon icon={faBackward} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.button, width: 75, height: 75}} onPress={()=>handlePlay()}>
        <FontAwesomeIcon icon={!play?faPlay:faPause} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleForward.short} onLongPress={()=>handleForward.long}>
        <FontAwesomeIcon icon={faFastForward} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default PlayerButtonsContainer;

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 100,
    alignItems: 'center',
    marginTop:100
    // backgroundColor: 'black',
  },
  button: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
    width:50,
    height:50
  },
});
