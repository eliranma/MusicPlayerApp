import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SongsListSectionItem = ({item}) => {
  return (
    <View style={styles.headerSectioContainer}>
      <Text style={styles.headerSectioText}>{item}</Text>
    </View>
  );
};

export default SongsListSectionItem;

const styles = StyleSheet.create({
  headerSectioContainer: {
    width: '100%',
    height: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  headerSectioText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
});
