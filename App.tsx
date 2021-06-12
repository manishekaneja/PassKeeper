import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import EntryPoint from './src';
import {bg} from './src/styles';

const App = () => {
  return (
    <View style={[styles.container, bg.light]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <EntryPoint />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
