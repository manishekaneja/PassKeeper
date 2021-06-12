import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import GuideScreen from './screens/GuideScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const EntryPoint: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Guide"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Guide" component={GuideScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default EntryPoint;
