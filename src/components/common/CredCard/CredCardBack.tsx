import React, {FC, useCallback, useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {bg, border, color, flx, font, height, my, p, px} from '../../../styles';
import {theme} from '../../../styles/theme';

const CredCardBack: FC<
  CredCardBackProps & {
    style?: StyleProp<ViewStyle>;
  }
> = ({onUpdate, style}) => {
  const onChange = useCallback(
    (type: 'username' | 'password') => (text: string) => onUpdate(text, type),
    [],
  );

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
        onChangeText={onChange('username')}
        autoCapitalize="none"
        contextMenuHidden={true}
        autoCompleteType={'username'}
        keyboardType="email-address"
        spellCheck={false}
        textContentType="username"
        underlineColorAndroid="transparent"
        autoCorrect={false}
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
        onChangeText={onChange('password')}
        autoCapitalize="none"
        autoCompleteType={'password'}
        contextMenuHidden={true}
        keyboardType="visible-password"
        spellCheck={false}
        textContentType="password"
        underlineColorAndroid="transparent"
        autoCorrect={false}
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
