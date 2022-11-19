import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {SearchField, SearchResults,SearchHistory} from '../components';
import {search} from '../utils';
import {AppContext} from '../context/AppContext';

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResultsData, setSearchResultsData] = useState([]);

  const {appConf, setAppConf} = useContext(AppContext);

  const onSubmit = async () => {
    let req = searchInput.replace(' ', '+');
    req = req.replace(' ', '+');
    try{
    let result = await search(req);
    if (result.length ===0)return 
    console.log(result);
    setSearchResultsData(result);
    setAppConf({
      ...appConf,
      searchHistory: [...appConf.searchHistory, searchInput],
    })}catch(err){
      console.log(err)
    }
  };

  return (
    <View style={{height: '100%', flexDirection: 'column', paddingTop: 5}}>
      <SearchField
        state={searchInput}
        setState={setSearchInput}
        submit={onSubmit}
      />
      {searchResultsData.length === 0 ? (
        <SearchHistory onPress={setSearchInput} submit={onSubmit} searchHistory={appConf.searchHistory} />
      ) : (
        <SearchResults  results={searchResultsData} />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
