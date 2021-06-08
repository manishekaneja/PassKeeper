import React, {FC} from 'react';
import {Dimensions, Text, View} from 'react-native';
import Basic3 from '../../assets/svg/basic3.svg';
import {
  bbr,
  bg,
  btl,
  color,
  flx,
  font,
  height,
  p,
  pb,
  pt,
  py,
} from '../../styles';

const {width} = Dimensions.get('screen');

const GuideScreen3: FC<NoProps> = () => {
  return (
    <View style={[flx.f1, bg.light, flx.center]}>
      <View style={[flx.f1, bg.dark, bbr.r50, flx.cntr]}>
        <Basic3 width={width} />
      </View>
      <View style={[bg.dark]}>
        <View style={[height.d150, bg.light, btl.r50, p.d20, {borderWidth: 0}]}>
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
        </View>
      </View>
    </View>
  );
};

export default GuideScreen3;
