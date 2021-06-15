import React, {FC, useCallback, useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {bg, border, color, flx, font, height, my, p, px} from '../../../styles';
import {theme} from '../../../styles/theme';

const CredCardBack: FC<{
  style?: StyleProp<ViewStyle>;
}> = ({style}) => {
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
        {elevation: 1},
        style,
      ]}>
      <TextInput
        onChangeText={onChange}
        placeholderTextColor={theme.light}
        placeholder="username/email"
        style={[
          {backgroundColor: theme.light + '22'},
          border.r10,
          color.dark,
          px.d10,
          my.d10,
          font.f16,
          {letterSpacing: 2.5},
        ]}
      />
      <TextInput
        onChangeText={onChange}
        placeholderTextColor={theme.light}
        placeholder="password"
        style={[
          {backgroundColor: theme.light + '22'},
          border.r10,
          color.dark,
          px.d10,
          my.d10,
          font.f16,
          {letterSpacing: 2.5},
        ]}
      />
    </View>
  );
};
export default CredCardBack;
