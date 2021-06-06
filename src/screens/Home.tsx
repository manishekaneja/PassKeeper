import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import basic from '../assets/svg/basic.svg';
import {bbr, bg, btl, color, flx, font, height, p, pt, py} from '../styles';
const HomeScreen: FC<NoProps> = () => {
  return (
    <Animated.View style={[flx.f1, bg.light, flx.center]}>
      <View style={[flx.f1, bg.dark, bbr.r50]}>
        <Image style={{width: 50}} resizeMode="center" source={basic} />
      </View>
      <View style={[bg.dark]}>
        <View style={[height.d200, bg.light, btl.r50, p.d20]}>
          <Text
            style={[font.f24, color.light, pt.d20, flx.center, font.center]}>
            Welcome To Pass-wallet
          </Text>
          <Text
            style={[font.f18, color.light, py.d20, flx.center, font.center]}>
            Single solution to secure all your Credentials
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default HomeScreen;
