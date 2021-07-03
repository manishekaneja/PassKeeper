import React, {FC, useCallback, useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {bg, border, color, flx, font, height, my, p, px} from '../../../styles';
import {theme} from '../../../styles/theme';

const CredCardFront: FC<CredCardFrontProps & {style?: StyleProp<ViewStyle>}> =
  ({onUpdate, style}) => {
    const onChange = useCallback(text => onUpdate(text, 'title'), []);
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
          autoCapitalize="none"
          autoCompleteType="name"
          autoFocus
          keyboardType="default"
          contextMenuHidden={true}
          returnKeyType="next"
          spellCheck={false}
          textContentType="givenName"
          underlineColorAndroid="transparent"
          autoCorrect={false}
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
