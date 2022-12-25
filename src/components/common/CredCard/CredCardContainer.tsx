import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {bg, border, flx, height, m, mx, my, p, px, py} from '../../../styles';

const CredCardContainer: FC<{
  style?: StyleProp<ViewStyle>;
}> = ({children, style}) => {
  return (
    <View
      style={[
        height.d200,
        bg.dark,
        border.r10,
        p.d14,
        my.d5,
        flx.center,
        {elevation: 1},
        style,
      ]}>
      {children}
    </View>
  );
};
export default CredCardContainer;
