import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {navigationRef} from '../Routes';
import {useEffect, useState} from 'react';
const TabBar = () => {
  const navigation = navigationRef;
  // Using navigationRef as my navigation "compass" so my tab bar will know where i am
  const [current, setCurrent] = useState();
  useEffect(() => {
    if (navigation.isReady()) {
      setCurrent(navigation.getCurrentRoute().name);
    }
  }, [navigation]);

  const ROUTES = [
    {name: 'Songs List', action: () => navigation.navigate('Songs List')},
    {name: 'Search', action: () => navigation.navigate('Search')},
  ];
  const handlePress = (e, cf) => {
    cf();
    setCurrent(e);
  };
  return (
    <View style={styles.tabBarContainer}>
      {ROUTES.map((route, index) => {
        // const isFocused = useIsFocused();
        const isFocused = route.name === current;
        // console.log(current)
        return (
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => handlePress(route.name, route.action)}
            key={index}
            style={styles.tabContainer}>
            <Text
              style={{
                ...styles.tabText,
                color: isFocused ? '#673ab7' : '#222',
              }}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default TabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },tabContainer:{
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  tabText:{
    textAlign: 'center',
  }
});
