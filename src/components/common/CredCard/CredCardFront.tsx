import React, {FC, useCallback, useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {bg, border, color, flx, font, height, my, p, px} from '../../../styles';
import {theme} from '../../../styles/theme';

const CredCardFront: FC<{
  style?: StyleProp<ViewStyle>;
}> = ({children, style}) => {
  const [value, setValue] = useState<string>('');
  const onChange = useCallback(text => setValue(text), []);
  return (
    <View
      style={[
        height.d200,
        bg.dark,
        border.r10,
        p.d14,
        my.d5,
        flx.center,
        {elevation: 1, justifyContent: 'space-around'},
        style,
      ]}>
      <TextInput
        onChangeText={onChange}
        placeholderTextColor={theme.light}
        placeholder="Card Title"
        style={[
          {backgroundColor: theme.light + '22'},
          border.r10,
          color.dark,
          px.d10,
          my.d10,
          font.f20,
          {letterSpacing: 2.5, fontWeight: '600'},
        ]}
      />
    </View>
  );
};
export default CredCardFront;
