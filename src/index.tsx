import React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/Home';
import { bg, flx } from './styles';

const EntryPoint: React.FC<{}> = () => {
  return (
    <View style={[flx.f1,bg.secondary_light]}>
      <HomeScreen />
      
    </View>
  );
};
export default EntryPoint;
