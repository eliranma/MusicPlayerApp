import {StyleSheet, Text, View, SectionList} from 'react-native';
import React, {useEffect, useContext} from 'react';
import SongsListItem from './SongsListItem';
import SongsListSectionItem from './SongsListSectionItem';
import {PlayerContext} from '../context/PlayerContext';
import {sortABC} from '../utils';

const SongsList = ({sortBy = 'ABC', songsList}) => {
  const {player, setPlayer} = useContext(PlayerContext);
  let sections = [];
  // console.log(songsList[1]);
  let songsName = songsList.reduce((acc, e) => {
    let title = e.name;

    acc.push(title);
    return acc;
  }, []);
  switch (sortBy) {
    case 'ABC':
      let data = songsName.reduce((r, e) => {
        // get first letter of name of current element
        let title = e[0];

        // if there is no property in accumulator with this letter create it
        if (!r[title]) r[title] = {title, data: [e]};
        // if there is push current element to children array for that letter
        else r[title].data.push(e);

        // return accumulator
        return r;
      }, {});

      let result = Object.values(data);
      sections = sortABC(result);
      // console.log(sections);
      break;

    default:
      break;
  }
  const getSongByName = name => {
    // console.log(song)
    let selectedIndex = songsName.indexOf(name);
    // console.log(index);
    let song = songsList[selectedIndex];
    return song;
  };
  const setSelected = song => {
    let songSelected = getSongByName(song);
    // console.log('SELECTED_SONG:' + JSON.stringify(songSelected));
    setPlayer({
      ...player,
      play: true,
      currentTime: 0,
      totalSongTime: songSelected.time,
      smallCover: songSelected.covers.small,
      bigCover: songSelected.covers.large,
      artist: songSelected.artist,
      currentSong: songSelected.name,
      album: songSelected.albumName,
      mode:'small'
    });
  };
  // useEffect(() => {
  //   console.log(sections);
  // }, [sections]);
  return (
    <View style={styles.songsListContainer}>
      <SectionList
        sections={sections}
        renderItem={({item}) => (
          <SongsListItem
            key={item.key}
            onPress={() => setSelected(item)}
            songName={item}
            artist={getSongByName(item).artist}
            image={getSongByName(item).covers.small}
            
          />
        )}
        renderSectionHeader={({section}) => (
          <SongsListSectionItem item={section.title} />
        )}
        keyExtractor={(item, index) => (item.key = index)}
      />
    </View>
  );
};

export default SongsList;

const styles = StyleSheet.create({
  songsListContainer: {
    height: '100%'
},
});
