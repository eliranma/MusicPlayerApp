import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PlayerDetails = ({songName, artist, album}) => {
  return (
    <View style={{width:'100%', marginTop:10, height:100}}>
      <Text style={{fontSize: 30, textAlign:'center', fontWeight:'600'}}>{songName}</Text>
      <View style={{width: '100%', display:'flex', justifyContent:'center', flexDirection:'row'}}>
        <Text style={{margin:5}}>{artist}</Text>
        <Text style={{margin:5}}>{album}</Text>
      </View>
    </View>
  );
};

export default PlayerDetails;

const styles = StyleSheet.create({});
