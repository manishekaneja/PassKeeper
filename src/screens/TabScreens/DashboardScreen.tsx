import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ScreenContainerLayout from '../../components/ScreenContainer/ScreenContainerLayout';
import {bg, border, flx, font, height, m, mb, p, px, py} from '../../styles';
import {theme} from '../../styles/theme';
import Card from '../../assets/svg/add-card.svg';
import Key from '../../assets/svg/key.svg';
import DisplayCard from '../../components/DisplayCard';

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

        <DisplayCard style={[bg.primary_light, flx.cntr, flx.row]}>
          <Text
            allowFontScaling={false}
            style={[font.f18, flx.f1, {color: theme.dark, fontWeight: '700'}]}>
            Total Credentials Count:
          </Text>
          <View style={[flx.cntr, flx.row]}>
            <Key height={40} color={theme.dark} />
            <Text
              allowFontScaling={false}
              style={[{color: theme.dark, textAlign: 'center', fontSize: 48}]}>
              10
            </Text>
          </View>
        </DisplayCard>
        <DisplayCard style={[bg.secondary_light, flx.row, flx.cntr]}>
          <Text
            style={[font.f18, flx.f1, {color: theme.dark, fontWeight: '700'}]}>
            Total Pinned Cards:
          </Text>
          <Text
            allowFontScaling={false}
            style={[{color: theme.dark, textAlign: 'center', fontSize: 48}]}>
            10
          </Text>
        </DisplayCard>
      </ScrollView>
    </ScreenContainerLayout>
  );
};
export default DashboardScreen;
