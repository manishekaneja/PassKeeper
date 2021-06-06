import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { pl } from './styles/padding/pl';

const EntryPoint: React.FC<{}> = () => {
  return (
    <View style={[pl.d2,styles.background]}>
      <Text>Hellor User</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffff0033',
    flex: 1,
  },
});

export default EntryPoint;
