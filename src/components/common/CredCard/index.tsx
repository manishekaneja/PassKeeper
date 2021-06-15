import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {bg, border, flx, m, mx, my, px, py} from '../../../styles';

const CredCard: FC<{
  style?: StyleProp<ViewStyle>;
}> = ({children, style}) => {
  return (
    <View
      style={[
        bg.white,
        flx.f1,
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
export default CredCard;
