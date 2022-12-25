import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {bg, border, flx, m, mx, my, px, py} from '../../../styles';

const DisplayCard: FC<{
  style?: StyleProp<ViewStyle>;
}> = ({children, style}) => {
  return (
    <View
      style={[
        bg.white,
        border.r10,
        flx.f1,
        py.d14,
        px.d14,
        my.d5,
        mx.d2,
        {elevation: 2},
        style,
      ]}>
      {children}
    </View>
  );
};
export default DisplayCard;
