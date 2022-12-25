import React, {FC} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Divider from '../../../components/common/Divider';
import ScreenContainerLayout from '../../../components/common/ScreenContainer/ScreenContainerLayout';
import AddNewCard from '../../../components/sections/AddNewCard';
import {flx, pb, pt, px} from '../../../styles';

const KeysScreen: FC<NoProps> = () => {
  return (
    <ScreenContainerLayout>
      <ScrollView style={[flx.f1, px.d10, pt.d1, pb.d20]}>
        <AddNewCard />
        <Divider />
      </ScrollView>
    </ScreenContainerLayout>
  );
};
export default KeysScreen;
