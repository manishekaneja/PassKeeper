import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EntryPoint: React.FC<{}> = () => {
  return (
    <View style={styles.background}>
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
