import {StackActions, useNavigation} from '@react-navigation/core';
import React, {FC, useCallback} from 'react';
import {Dimensions, Pressable, SafeAreaView, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
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
import CheckIcon from '../assets/svg/check.svg';
import LeftArrow from '../assets/svg/leftArrow.svg';
import RightArrow from '../assets/svg/rightArrow.svg';
import CredCardBack from '../components/common/CredCard/CredCardBack';
import CredCardFront from '../components/common/CredCard/CredCardFront';
import Heading from '../components/common/Heading';
import ScreenContainerLayout from '../components/common/ScreenContainer/ScreenContainerLayout';
import GuideTemplate from '../components/Guide/GuideTemplate';
import {bg, color, flx, font, height, p, pb, pt, px, py} from '../styles';
import {theme} from '../styles/theme';

const {width} = Dimensions.get('screen');

const CreateKeyCard: FC<NoProps> = () => {
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
  const hideOnFirst = useAnimatedStyle(() => {
    return {
      opacity: withTiming(position.value <= 0 ? 0 : 1),
      width: withTiming(position.value <= 0 ? 0 : width / 2),
    };
  }, [position]);
  const {navigate, dispatch} = useNavigation();

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

  const completeAction = useCallback(() => {
    dispatch(StackActions.replace('Home'));
  }, [navigate]);

  return (
    <ScreenContainerLayout>
      <View style={[flx.f1, flx.center, flx.col, py.d20, px.d10]}>
        <CredCardFront />
        <CredCardBack />
      </View>
    </ScreenContainerLayout>
  );
};

export default CreateKeyCard;
