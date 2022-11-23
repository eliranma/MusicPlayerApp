import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

const SongsListItem = ({
  songName,
  artist = 'Unknown artist',
  mbid='',
  image,
  add = false,
  onLongPress = e => console.log('long: ' + e),
  onPress = e => console.log(e),
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(songName)}
      id={mbid}
      onLongPress={add ? () => onLongPress(mbid) : null}
      style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.bigText}>
          {songName.length > 30
            ? songName.replace(songName.slice(30, -1), '...')
            : songName}
        </Text>
        <Text style={styles.smallText}>{artist}</Text>
      </View>
      <View style={styles.itemImageContainer}>
        <Image source={{uri: image}} style={styles.itemImage} />
      </View>
    </TouchableOpacity>
  );
};

export default SongsListItem;

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 8,
    margin: 'auto',
    flexDirection: 'column',
  },
  bigText: {
    fontSize: 20,
  },
  smallText: {
    fontSize: 12,
  },
  itemImageContainer: {
    maxHeight: 35,
    height: 35,
    maxWidth: 35,
    width: 35,
    backgroundColor: 'rgba(0,0,0,0.2)',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 20,
    borderRadius: 8,
  },
  itemImage: {
    height: 35,
    width: 35,
    borderRadius: 8,
  },
});
