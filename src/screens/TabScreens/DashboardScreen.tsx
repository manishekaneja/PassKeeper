import React, {FC} from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import Divider from '../../components/Divider';
import ScreenContainerLayout from '../../components/ScreenContainer/ScreenContainerLayout';
import {
  bbl,
  bbr,
  bg,
  border,
  btl,
  btr,
  flx,
  font,
  height,
  m,
  mb,
  p,
  px,
  py,
} from '../../styles';
import {theme} from '../../styles/theme';

const DashboardScreen: FC<{children: React.ReactChildren}> = ({children}) => {
  return (
    <ScreenContainerLayout>
      <ScrollView>
        <View style={[flx.cntr, p.d20, mb.d20]}>
          <Pressable
            android_ripple={{
              borderless: true,
              color: theme.light + '33',
              radius: 100,
            }}
            style={[
              bg.dark,
              flx.cntr,
              height.d200,
              {
                width: 200,
                elevation: 10,
                borderRadius: 100,
                overflow: 'hidden',
              },
            ]}>
            <Text
              allowFontScaling={false}
              style={[{color: theme.light, textAlign: 'center'}, font.f24]}>
              Dashboard
            </Text>
          </Pressable>
        </View>
        <View style={[flx.f1, flx.row, flx.center]}>
          <View
            style={[
              bg.primary_light,
              border.r10,
              flx.f1,
              py.d14,
              px.d14,
              m.d2,
            ]}>
            <Text
              allowFontScaling={false}
              style={[{color: theme.dark}, font.f12]}>
              Total Cards Created:
            </Text>
            <Text
              allowFontScaling={false}
              style={[{color: theme.dark, textAlign: 'center', fontSize: 48}]}>
              10
            </Text>
          </View>
          <View
            style={[
              bg.secondary_light,
              border.r10,
              flx.f1,
              py.d14,
              px.d14,
              m.d2,
            ]}>
            <Text style={[{color: theme.dark}, font.f12]}>
              Total Pinned Cards:
            </Text>
            <Text
              allowFontScaling={false}
              style={[{color: theme.dark, textAlign: 'center', fontSize: 48}]}>
              10
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainerLayout>
  );
};
export default DashboardScreen;
