import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Key from '../../../assets/svg/key.svg';
import Pin from '../../../assets/svg/pin.svg';
import DisplayCard from '../../../components/common/DisplayCard';
import Heading from '../../../components/common/Heading';
import {bg, flx, font} from '../../../styles';
import {theme} from '../../../styles/theme';

const Section2: FC<NoProps> = () => {
  return (
    <React.Fragment>
      <Heading>Recent</Heading>
      <DisplayCard style={[bg.primary_light, flx.cntr, flx.row]}>
        <Text
          allowFontScaling={false}
          style={[font.f16, flx.f1, {color: theme.dark}]}>
          Total Credentials Count:
        </Text>
        <View
          style={[
            flx.cntr,
            flx.row,
            {
              alignItems: 'flex-end',
            },
          ]}>
          <Key height={32} color={theme.dark} />
          <Text
            allowFontScaling={false}
            style={[
              {
                color: theme.dark,
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '700',
              },
            ]}>
            10
          </Text>
        </View>
      </DisplayCard>
      <DisplayCard style={[bg.primary_light, flx.cntr, flx.row]}>
        <Text
          allowFontScaling={false}
          style={[font.f16, flx.f1, {color: theme.dark}]}>
          Total Credentials Count:
        </Text>
        <View
          style={[
            flx.cntr,
            flx.row,
            {
              alignItems: 'flex-end',
            },
          ]}>
          <Key height={32} color={theme.dark} />
          <Text
            allowFontScaling={false}
            style={[
              {
                color: theme.dark,
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '700',
              },
            ]}>
            10
          </Text>
        </View>
      </DisplayCard>
    </React.Fragment>
  );
};
export default Section2;
