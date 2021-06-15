import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {border, flx, height, py} from '../../styles';
import {theme} from '../../styles/theme';

export const TabIcon: FC<{
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
            duration: 300,
          }),
        },
      ],
    }),
    [focused],
  );
  const hightlighted = useAnimatedStyle(
    () => ({
      backgroundColor: withTiming(focused.value ? theme.light : theme.dark, {
        duration: 300,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      elevation: withTiming(focused.value ? 25 : 0, {
        duration: 300,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    }),
    [focused],
  );
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      android_ripple={{borderless: true, color: 'transparent', radius: 0}}
      style={[flx.f1, flx.cntr, py.d16]}>
      <Animated.View
        style={[
          flx.cntr,
          border.r50,
          height.d50,
          {width: 50},
          hightlighted,
          selectedStyles,
        ]}>
        <View>
          {/* @ts-ignore */}
          <Image
            {...{
              width: 24,
              color: isFocused ? theme.dark : theme.secondary.light + '66',
            }}
          />
        </View>
      </Animated.View>
    </Pressable>
  );
};
