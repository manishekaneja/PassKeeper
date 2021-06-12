import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Pressable, View} from 'react-native';
import Animated from 'react-native-reanimated';
import DashboardIcon from '../assets/svg/dashboard.svg';
import KeyIcon from '../assets/svg/key.svg';
import PinIcon from '../assets/svg/pin.svg';
import UserIcon from '../assets/svg/user.svg';
import CustomBottomTabBar from '../components/BottomTabBar/CustomBottomTabBar';
import {bg, flx, m, p} from '../styles';
import {theme} from '../styles/theme';
import GuideScreen from './GuideScreen';
import DashboardScreen from './TabScreens/DashboardScreen';

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
      <Tab.Screen key="Keys" name="Keys" component={DashboardScreen} />
      <Tab.Screen key="Pinned" name="Pinned" component={GuideScreen} />
      <Tab.Screen key="Profile" name="Profile" component={DashboardScreen} />
    </Tab.Navigator>
  );
}
export default HomeScreen;
