import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import React, {FC, useCallback} from 'react';
import {View} from 'react-native';
import DashboardIcon from '../../assets/svg/dashboard.svg';
import KeyIcon from '../../assets/svg/key.svg';
import PinIcon from '../../assets/svg/pin.svg';
import UserIcon from '../../assets/svg/user.svg';
import {bg, flx, height} from '../../styles';
import {TabIcon} from './TabIcon';

const IconConfigObject: Record<string, any> = {
  Dashboard: DashboardIcon,
  Pinned: PinIcon,
  Keys: KeyIcon,
  Profile: UserIcon,
};

const CustomBottomTabBar: FC<BottomTabBarProps<BottomTabBarOptions>> = ({
  navigation,
  state: {index, routes},
}) => {
  const onPress = useCallback(
    (routeKey, routeName) => () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: routeKey,
        canPreventDefault: true,
      });
      if (!event.defaultPrevented) {
        navigation.navigate(routeName);
      }
    },
    [],
  );

  const onLongPress = useCallback(
    routeKey => () => {
      navigation.emit({
        type: 'tabLongPress',
        target: routeKey,
      });
    },
    [],
  );
  return (
    <View style={[bg.light]}>
      <View
        style={[
          {
            overflow: 'visible',
          },
          bg.dark,
          height.d50,
          flx.center,
          flx.row,
        ]}>
        {routes.map(({key, name}, idx) => {
          const Icon = IconConfigObject[name];
          return (
            <TabIcon
              isFocused={index === idx}
              key={key}
              title={name}
              onPress={onPress(key, name)}
              Image={Icon}
              onLongPress={onLongPress(key)}
            />
          );
        })}
      </View>
    </View>
  );
};
export default CustomBottomTabBar;
