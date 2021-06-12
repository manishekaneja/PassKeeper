import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {bg, mb, mx, my} from '../../styles';

const Divider: FC<{gutter?: boolean}> = ({gutter = false}) => (
  <View
    style={[
      bg.dark,
      gutter ? [my.d4] : [],
      {
        height: StyleSheet.hairlineWidth,
      },
    ]}
  />
);

export default Divider;
