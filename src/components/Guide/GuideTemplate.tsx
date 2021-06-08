import React, {FC} from 'react';
import {View, Dimensions} from 'react-native';
import {bbl, bbr, bg, btl, btr, flx, height, p} from '../../styles';
const {width} = Dimensions.get('screen');

const GuideTemplate: FC<{
  Image: string;
  even?: boolean;
  size?:number;
}> = ({Image, children, even = false,size = width-40}) => {
  return (
    <View style={[flx.f1, bg.light, flx.center, {width}]}>
      <View style={[flx.f1, bg.dark, even ? bbl.r50 : bbr.r50, flx.cntr,{
        elevation:5
      }]}>
        {/* @ts-ignore */}
        <Image width={size} />
      </View>
      <View style={[bg.dark]}>
        <View style={[height.d150, bg.light, even ? btr.r50 : btl.r50, p.d20]}>
          {children}
        </View>
      </View>
    </View>
  );
};

export default GuideTemplate;
