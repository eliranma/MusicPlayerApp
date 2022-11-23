import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {PlayerContext} from '../context/PlayerContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons/faPlay';
import {faForward, faPause} from '@fortawesome/free-solid-svg-icons';
import ProgressBar from './ProgressBar';
import {navigationRef} from '../Routes';

const SmallPlayer = () => {
  const {player, setPlayer} = useContext(PlayerContext);
  const navigation = navigationRef
  const handleOpen = ()=>{
    if (navigation.isReady()) {
      navigation.navigate('Player')
    }
  }
  const BUTTONS = [
    {
      name: 'Play',
      action: () => {
        setPlayer({
          ...player,
          play: true,
        });
      },
      icon: faPlay,
      disabled: player.play,
    },
    {
      name: 'Pause',
      action: () => {
        setPlayer({
          ...player,
          play: false,
        });
      },
      icon: faPause,
      disabled: !player.play,
    },
    {
      name: 'Next',
      action: () => {
        setPlayer({
          ...player,
          play: true,
        });
      },
      icon: faForward,
      disabled: false,
    },
  ];
  return (
    <View
      style={{
        ...styles.smallPlayerContainer,
      }}>
      {/**ProgressBar**/}
      <ProgressBar total={player.totalSongTime} />
      {/**Footer All controllers and media content**/}
      <View
        style={styles.bottomContainer}>
        {/**Buttons**/}
        <View style={styles.smallPlayerButtonsContainer}>
          {BUTTONS.map((button, i) => {
            if (button.disabled == false) {
              return (
                <TouchableOpacity
                  style={styles.button}
                  key={i}
                  onPress={() => {
                    if (button.name !== 'Next') {
                      button.name === 'Pause'
                        ? (BUTTONS[0].disabled = true)
                        : button.name === 'Play'
                        ? (BUTTONS[1].disabled = true)
                        : (button.disabled = false);
                    }
                    button.action();
                  }}>
                  <FontAwesomeIcon color="#673ab7" icon={button.icon} />
                </TouchableOpacity>
              );
            }
          })}
        </View>
        {/**Song Name**/}
        <TouchableOpacity onPress={handleOpen} style={styles.songDetailesContainer}>
          <Text style={styles.buttonText}>{player.currentSong}</Text>
          <Text>{player.artist}</Text>
        </TouchableOpacity>
        {/**Songs Image**/}
        <View style={styles.songImageContainer}>
          <Image source={{uri: player.smallCover}} style={styles.songImage} />
        </View>
      </View>
    </View>
  );
};

export default SmallPlayer;

const styles = StyleSheet.create({
  smallPlayerContainer: {
    width: '100%',
    maxHeight: '11.5%',
    flex: 1,
    zIndex: 1000,
    // paddingBottom:15,
    // backgroundColor:'black',
    // alignItems:'center',
    // position:'absolute',
    // bottom:100,
    justifyContent: 'center',
  },
  smallPlayerButtonsContainer: {
    width: '35%',
    margin: 'auto',
    alignSelf: 'flex-start',
    justifyContent: 'space-evenly',
    height: '100%',
    // backgroundColor:'white',
    flexDirection: 'row',
  },
  button: {
    height: 'auto',
    // backgroundColor:'black'
    display: 'flex',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 15,
  },
  songDetailesContainer: {
    display: 'flex',
    flex: 1,
    height: 'auto',
    width: '50%',
    zIndex: 9999,
    margin:0,
    flexDirection: 'column',
  },
  songImageContainer: {
    maxHeight: 45,
    height: 45,
    maxWidth: 45,
    width: 45,
    backgroundColor: 'rgba(0,0,0,0.2)',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 40,
    borderRadius: 8,
  },
  songImage: {
    height: 45,
    width: 45,
    borderRadius: 8,
  },
  bottomContainer:{
    flexDirection: 'row',
    margin: 'auto',
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 15,
    height: '75%',
  }
});
