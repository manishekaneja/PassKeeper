import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import CustomBottomTabBar from '../components/BottomTabBar/CustomBottomTabBar';
import DashboardScreen from './TabScreens/DashboardScreen';
import KeysScreen from './TabScreens/KeysScreen';
import PinnedScreen from './TabScreens/PinnedScreen';
import ProfileScreen from './TabScreens/ProfileScreen';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTabBar {...props} />}
      initialRouteName="Dashboard">
      <Tab.Screen
        key="Dashboard"
        name="Dashboard"
        component={DashboardScreen}
      />
      <Tab.Screen key="Keys" name="Keys" component={KeysScreen} />
      <Tab.Screen key="Pinned" name="Pinned" component={PinnedScreen} />
      <Tab.Screen key="Profile" name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default HomeScreen;
