import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SongsListItem from './SongsListItem';

const SearchResults = ({results=[]}) => {
    // console.log(searchHistory);
    // results.map((result)=>console.log(result))
  return (
    <View>
      <FlatList
        data={results}
        renderItem={({item}) => <SongsListItem songName={item.name} artist={item.artist||''} image={item.covers.small||''}/>}
  />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
