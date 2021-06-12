import React, {FC} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {bbl, bbr, bg, btl, btr, flx, p, px} from '../../styles';

const ScreenContainerLayout: FC<{safeMode?: boolean}> = ({
  children,
  safeMode = false,
}) => {
  return (
    <>
      <View
        style={[
          bg.dark,
          bbl.r10,
          bbr.r10,
          {height: StatusBar.currentHeight, elevation: 20},
        ]}
      />
      {safeMode ? (
        <SafeAreaView
          style={[flx.f1, bg.light, {paddingTop: StatusBar.currentHeight}]}>
          {children}
        </SafeAreaView>
      ) : (
        <View style={[flx.f1, bg.light, {paddingTop: StatusBar.currentHeight}]}>
          {children}
        </View>
      )}
      <View style={[bg.dark, btl.r10, btr.r10, {height: 5, elevation: 20}]} />
    </>
  );
};
export default ScreenContainerLayout;
