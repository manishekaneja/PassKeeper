import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ScreenContainerLayout from '../../components/ScreenContainer/ScreenContainerLayout';
import {bg, border, flx, font, height, m, mb, p, px, py} from '../../styles';
import {theme} from '../../styles/theme';
import Card from '../../assets/svg/add-card.svg';
import Key from '../../assets/svg/key.svg';

const DashboardScreen: FC<{children: React.ReactChildren}> = ({children}) => {
  return (
    <ScreenContainerLayout>
      <ScrollView style={[p.d10]}>
        <View style={[flx.cntr, mb.d20, border.r10]}>
          <Pressable
            android_ripple={{
              borderless: true,
              color: theme.light + '33',
              radius: 200,
            }}
            style={[
              bg.dark,
              flx.cntr,
              height.d200,
              {
                elevation: 10,
                borderRadius: 10,
              },
            ]}>
            <View style={[flx.f1, flx.center]}>
              <Card height={100} color={theme.light} />
            </View>
            <Text
              allowFontScaling={false}
              style={[
                {color: theme.light, textAlign: 'center'},
                p.d10,
                font.f18,
              ]}>
              Save new Credentials
            </Text>
          </Pressable>
        </View>
        <Text
          allowFontScaling={false}
          style={[{color: theme.dark, textAlign: 'left'}, p.d10, font.f18]}>
          Insights
        </Text>

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
              style={[
                font.f12,
                {color: theme.dark, fontWeight: '700', textAlign: 'center'},
              ]}>
              Total Credentials Count:
            </Text>
            <View style={[flx.cntr, flx.row]}>
              <Text
                allowFontScaling={false}
                style={[
                  {color: theme.dark, textAlign: 'center', fontSize: 48},
                ]}>
                10
              </Text>
              <Key height={40} color={theme.dark} />
            </View>
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
