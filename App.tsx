import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import EntryPoint from './src';
import {bg} from './src/styles';

const App = () => {
  return (
    <SafeAreaView style={[styles.container, bg.light]}>
      <StatusBar hidden />
      <EntryPoint />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
