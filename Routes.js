import { NavigationContainer,createNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SongsListScreen, PlayerScreen, SearchScreen, /**SettingsScreen**/ } from "./screens"
import { Header } from "./components";



const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef()
  // Creatin a ref to the navigation container so i will be able to access navigation from the context TabBar.jsx
const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};


const AppRoutes = () =>{
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
            screenOptions={{header:({ navigation, route, options, back }) => {
              return (
                <Header
                navigation={navigation} route={route} options={options} back={back}
                />
              );
            }
            }}>
              <Stack.Group>
                <Stack.Screen
                  name="Songs List"
                  component={SongsListScreen}
                  options={{
                    cardStyleInterpolator: ({ current }) => ({
                      cardStyle: {
                        opacity: current.progress,
                      },
                    }),
                  }}
                />
                <Stack.Screen
                  name="Search"
                  component={SearchScreen}
                  options={{
                    cardStyleInterpolator: ({ current }) => ({
                      cardStyle: {
                        opacity: current.progress,
                      },
                    }),
                  }}
                />
              </Stack.Group>
              <Stack.Group screenOptions={{ presentation: "modal", headerShown: false }}>
                <Stack.Screen name="Player" component={PlayerScreen} />
              </Stack.Group>
            </Stack.Navigator>
      </NavigationContainer>
    )
}
export default AppRoutes