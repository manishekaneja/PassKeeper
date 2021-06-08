import {StyleSheet} from 'react-native';

const flx = StyleSheet.create({
  flex: {
    display: 'flex',
  },
  f1: {
    flex: 1,
  },
  f0: {
    flex: 0,
  },
  wrap: {
    flexWrap: 'wrap',
  },
  nowrap: {
    flexWrap: 'nowrap',
  },
  col: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  cntr:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  center:{
    display:"flex",
    justifyContent:"center",
    alignItems:"stretch"
  }
});

export {flx};