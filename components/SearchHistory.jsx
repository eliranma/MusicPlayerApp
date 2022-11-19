import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import SongsListItem from './SongsListItem'

const SearchHistory = ({searchHistory, onPress,submit}) => {
    const searchFromHistory = async (item) =>{
        await onPress(item)
        // submit()
        // console.log(item);
    }
  return (
    <View>
      <FlatList data={searchHistory}
      renderItem={({item})=><SongsListItem onPress={searchFromHistory} songName={item} />}/>
    </View>
  )
}

export default SearchHistory

const styles = StyleSheet.create({})