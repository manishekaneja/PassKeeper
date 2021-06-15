import React, {FC} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {bbl, bbr, bg, btl, btr, flx, pb} from '../../../styles';

const ScreenContainerLayout: FC<{
  style?: StyleProp<ViewStyle>;
  safeMode?: boolean;
}> = ({children, style, safeMode = false}) => {
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
          style={[
            flx.f1,
            bg.light,
            {paddingTop: StatusBar.currentHeight},
            style,
          ]}>
          {children}
        </SafeAreaView>
      ) : (
        <View style={[flx.f1, bg.light, pb.d1, style]}>{children}</View>
      )}
      <View style={[bg.dark, btl.r10, btr.r10, {height: 5, elevation: 20}]} />
    </>
  );
};
export default ScreenContainerLayout;
