import React, {FC, useCallback} from 'react';
import {BackHandler, Pressable, Text, View} from 'react-native';
import Heading from '../../../components/common/Heading';
import ScreenContainerLayout from '../../../components/common/ScreenContainer/ScreenContainerLayout';
import {bg, flx, font, pb, px, py} from '../../../styles';
import {theme} from '../../../styles/theme';
import Power from '../../../assets/svg/power.svg';
const ProfileScreen: FC<NoProps> = () => {
  const closeApplicationAction = useCallback(() => {
    BackHandler.exitApp();
  }, []);
  return (
    <ScreenContainerLayout style={[flx.center]}>
      <View style={[py.d20, flx.f1, flx.cntr]}>
        <View style={[py.d20]}>
          <Heading style={[{textAlign: 'center'}]}>Hey Anonymous</Heading>
          <Text style={[font.f16, {textAlign: 'center'}]}>
            We don't have any Profile to identify you
          </Text>
          <Text style={[font.f16, {textAlign: 'center'}]}>
            Just Press below and close the Application.
          </Text>
        </View>
        <Pressable
          onPress={closeApplicationAction}
          android_ripple={{
            color: theme.light,
            radius: 100,
          }}
          style={[
            bg.dark,
            flx.cntr,
            {
              borderRadius: 100,
              width: 200,
              height: 200,
              elevation: 4,
              overflow: 'hidden',
            },
          ]}>
          <Power height={50} color={theme.light} />
        </Pressable>
      </View>
      <View style={[pb.d20, px.d20]}>
        <Text style={[font.f10, {textAlign: 'center'}]}>
          **Deleting this application will result in losing all the information
          you have saved
        </Text>
      </View>
    </ScreenContainerLayout>
  );
};
export default ProfileScreen;
