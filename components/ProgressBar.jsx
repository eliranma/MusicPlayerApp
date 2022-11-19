import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {PlayerContext} from '../context/PlayerContext';
import Slider from '@react-native-community/slider';
import {msToTime, timeToMs} from '../utils';
import {ThumbTintImage} from '../assets';

const ProgressBar = ({total}) => {
  const {player, setPlayer} = useContext(PlayerContext);
  total = timeToMs(total);
  const handleSlide = e => {
    // console.log(e);
    // let formated = msToTime(e)
    setPlayer({...player, currentTime: e});
    // console.log(player)
  };
  useEffect(() => {
    // console.log(player);
    const interval = setInterval(() => {
      if (player.play && player.currentTime < total) {
        setPlayer({...player, currentTime: player.currentTime + 1000});
      } else {
        () => clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [player.currentTime, player.play]);

  return (
    <View style={styles.progressBarContainer}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        onValueChange={handleSlide}
        value={timeToMs(player.currentTime)}
        // onSlidingComplete={''} // TODO: Add next song on playlist function
        maximumValue={total}
        thumbImage={ThumbTintImage}
        minimumTrackTintColor="rgba(0,0,0,0.25)"
        maximumTrackTintColor="rgba(0,0,0,0.5)"
        onSlidingStart={handleSlide}
        step={1000}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 30,
    // width: '100%',
    // overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 15,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    marginBottom: 5,
  },
  slider: {
    width: '100%',
    maxHeight: 30,
  },
});
