import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const Header = ({navigation, route, options, back}) => {
  let title = route.name;
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    marginBottom: 5,
    height: 80,
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  goBack: {
    height: 'auto',
    width: 'auto',
    margin: 'auto',
    opacity:0
  },
  headerText: {
    textAlign: 'center',
    width: '89%',
    fontSize: 18,
    fontWeight: '700',
  },
});
