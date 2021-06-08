import React, {FC, useCallback} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Basic from '../assets/svg/basic.svg';
import Basic2 from '../assets/svg/basic2.svg';
import Basic3 from '../assets/svg/basic3.svg';

import GuideTemplate from '../components/Guide/GuideTemplate';
import {bg, btl, color, flx, font, height, p, pb, pt, py} from '../styles';

const {width} = Dimensions.get('screen');

const HomeScreen: FC<NoProps> = () => {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const position = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      position.value = event.contentOffset.x;
    },
  });
  const hideOnLast = useAnimatedStyle(() => {
    return {
      opacity: withTiming(position.value > width ? 0 : 1),
      width: withTiming(position.value > width ? 0 : width / 2),
    };
  }, [position]);
  const showOnLast = useAnimatedStyle(() => {
    return {
      opacity: withTiming(position.value > width ? 1 : 0),
      width: withTiming(position.value > width ? width / 2 : 0),
    };
  }, [position]);

  const goBack = useCallback(() => {
    // @ts-ignore
    scrollViewRef.current.scrollTo({
      x: Math.max(position.value - width, 0),
    });
  }, [scrollViewRef, position]);

  const goNext = useCallback(() => {
    //@ts-ignore
    scrollViewRef.current.scrollTo({
      x: Math.min(position.value + width, width * 3),
    });
  }, [scrollViewRef, position]);

  return (
    <React.Fragment>
      <Animated.ScrollView
        ref={scrollViewRef}
        scrollEventThrottle={width}
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        horizontal
        pagingEnabled>
        <GuideTemplate Image={Basic}>
          <Text
            style={[font.f24, color.light, pt.d20, flx.center, font.center]}>
            Welcome To Pass-wallet
          </Text>
          <Text
            style={[font.f18, color.light, py.d20, flx.center, font.center]}>
            Single solution to secure all your Credentials
          </Text>
        </GuideTemplate>
        <GuideTemplate Image={Basic2} even size={200}>
          <Text
            style={[font.f24, color.light, pt.d20, flx.center, font.center]}>
            No Internet Needed
          </Text>
          <Text
            style={[font.f18, color.light, py.d20, flx.center, font.center]}>
            Credentials won't leave your device.
          </Text>
        </GuideTemplate>
        <GuideTemplate Image={Basic3}>
          <Text
            style={[
              font.f24,
              color.light,
              pt.d20,
              pb.d10,
              flx.center,
              font.center,
            ]}>
            One Touch Solution
          </Text>
          <Text style={[font.f18, color.light, py.d0, flx.center, font.center]}>
            Just One Tap to access credentials
          </Text>
        </GuideTemplate>
      </Animated.ScrollView>
      <View style={[flx.row, bg.light]}>
        <Animated.View style={[flx.f1, bg.light, height.d50]}>
          <TouchableOpacity
            activeOpacity={0.75}
            style={[bg.light, height.d50, flx.center, flx.f1]}
            onPress={goBack}>
            <Text style={[font.f18, color.light, flx.center, font.center]}>
              Prev
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[bg.light, height.d50, hideOnLast, {overflow: 'hidden'}]}>
          <TouchableOpacity
            activeOpacity={0.95}
            style={[p.d5, flx.center, flx.f1]}
            onPress={goNext}>
            <Text style={[font.f18, color.light, flx.center, font.center]}>
              Next
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[bg.light, height.d50, showOnLast]}>
          <TouchableOpacity
            activeOpacity={0.95}
            style={[p.d5, flx.center, flx.f1]}
            onPress={() => {
              // @ts-ignore
              scrollViewRef.current.scrollTo({
                x: Math.min(position.value + width, width * 3),
              });
            }}>
            <Text style={[font.f18, color.light, flx.center, font.center]}>
              Go
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </React.Fragment>
  );
};

export default HomeScreen;
