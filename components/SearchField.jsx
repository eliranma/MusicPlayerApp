import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const SearchField = ({state, setState, submit}) => {
  return (
    <View
      style={styles.SearchFieldContainer}>
      <TextInput
        editable={true}
        value={state}
        onChangeText={setState}
        returnKeyType="search"
        onSubmitEditing={submit}
        placeholder="   Search song "
        
      />
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  SearchFieldContainer:{
    width: '100%',
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.12)',
    justifyContent: 'center',
    paddingHorizontal: 10,
  }
});
