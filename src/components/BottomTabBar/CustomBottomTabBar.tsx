import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import React, {FC, useCallback} from 'react';
import {Pressable, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import DashboardIcon from '../../assets/svg/dashboard.svg';
import KeyIcon from '../../assets/svg/key.svg';
import PinIcon from '../../assets/svg/pin.svg';
import UserIcon from '../../assets/svg/user.svg';
import {bg, border, flx, height, py} from '../../styles';
import {theme} from '../../styles/theme';

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

const TabIcon: FC<{
  Image: string;
  onLongPress: () => void;
  onPress: () => void;
  title: string;
  isFocused: boolean;
}> = ({Image, onPress, onLongPress, isFocused}) => {
  const focused = useDerivedValue(() => {
    return isFocused;
  }, [isFocused]);
  const selectedStyles = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateY: withTiming(focused.value ? -25 : 0, {
            duration: 500,
          }),
        },
      ],
    }),
    [focused],
  );
  const hightlighted = useAnimatedStyle(
    () => ({
      backgroundColor: withTiming(focused.value ? theme.light : theme.dark, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      elevation: withTiming(focused.value ? 25 : 0, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    }),
    [focused],
  );
  return (
    <Animated.View style={[flx.f1, flx.cntr, py.d16, selectedStyles]}>
      <Animated.View
        style={[flx.cntr, border.r50, height.d50, {width: 50}, hightlighted]}>
        <Pressable
          onPress={onPress}
          onLongPress={onLongPress}
          android_ripple={{borderless: true, color: 'transparent', radius: 0}}
          //   android_ripple={{
          //     borderless: true,
          //     color: theme.light,
          //     radius: 50,
          //   }}
        >
          {/* @ts-ignore */}
          <Image
            {...{
              width: 24,
              color: isFocused ? theme.dark : theme.secondary.light + '66',
            }}
          />
          {/* <Text
            style={[
              {
                color: isFocused ? theme.light : theme.secondary.light + '66',
                marginTop: -10,
                fontSize: 10,
              },
            ]}>
            {title}
          </Text> */}
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
};
