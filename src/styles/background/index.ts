import {StyleSheet} from 'react-native';
import {theme} from '../theme';

const bg = StyleSheet.create({
  primary_light: {
    backgroundColor: theme.primary.light,
  },
  primary: {
    backgroundColor: theme.primary.default,
  },
  primary_dark: {
    backgroundColor: theme.primary.dark,
  },
  secondary_light: {
    backgroundColor: theme.secondary.light,
  },
  secondary: {
    backgroundColor: theme.secondary.default,
  },
  secondary_dark: {
    backgroundColor: theme.secondary.dark,
  },
  light: {
    backgroundColor: theme.light,
  },
  dark: {
    backgroundColor: theme.dark,
  },
  white:{
    backgroundColor:"white"
  }
});

export {bg};
