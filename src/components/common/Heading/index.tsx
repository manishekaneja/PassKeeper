import React, {FC} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {font, p} from '../../../styles';
import {theme} from '../../../styles/theme';

const Heading: FC<{style?: StyleProp<TextStyle>}> = ({children, style}) => {
  return (
    <Text
      allowFontScaling={false}
      style={[
        p.d10,
        font.f24,
        {fontWeight: '700', color: theme.dark, textAlign: 'left'},
        style,
      ]}>
      {children}
    </Text>
  );
};
export default Heading;
