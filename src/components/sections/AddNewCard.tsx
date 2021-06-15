import {useNavigation} from '@react-navigation/core';
import React, {FC, useCallback} from 'react';
import {Pressable, Text, View} from 'react-native';
import Card from '../../assets/svg/add-card.svg';
import {bg, border, flx, font, height, mb, my, p} from '../../styles';
import {theme} from '../../styles/theme';

const AddNewCard: FC<NoProps> = () => {
  const {navigate} = useNavigation();
  const navigateToAddCardScreen = useCallback(() => {
    navigate('CreateKeyCard');
  }, []);
  return (
    <View
      style={[
        flx.cntr,
        my.d5,
        border.r10,
        {
          elevation: 1,
        },
      ]}>
      <Pressable
        onPress={navigateToAddCardScreen}
        android_ripple={{
          borderless: true,
          color: theme.light ,
          radius: 200,
        }}
        style={[bg.dark, flx.cntr, height.d200]}>
        <View style={[flx.f1, flx.center]}>
          <Card height={100} color={theme.light} />
        </View>
        <Text
          allowFontScaling={false}
          style={[{color: theme.light, textAlign: 'center'}, p.d10, font.f18]}>
          Save new Credentials
        </Text>
      </Pressable>
    </View>
  );
};
export default AddNewCard;
