import React, {FC} from 'react';
import {Text} from 'react-native';
import {font, p} from '../../../styles';
import {theme} from '../../../styles/theme';

const Heading: FC<{}> = ({children}) => {
  return (
    <Text
      allowFontScaling={false}
      style={[
        p.d10,
        font.f24,
        {fontWeight: '700', color: theme.dark, textAlign: 'left'},
      ]}>
      {children}
    </Text>
  );
};
export default Heading;
