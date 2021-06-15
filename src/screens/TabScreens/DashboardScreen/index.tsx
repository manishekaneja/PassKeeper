import React, {FC} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Divider from '../../../components/common/Divider';
import ScreenContainerLayout from '../../../components/common/ScreenContainer/ScreenContainerLayout';
import {flx, pb, pt, px} from '../../../styles';
import AddNewCard from '../../../components/sections/AddNewCard';
import Section1 from './Section1';
import Section2 from './Section2';

const DashboardScreen: FC<NoProps> = () => {
  return (
    <ScreenContainerLayout>
      <ScrollView style={[flx.f1, px.d10, pt.d1, pb.d20]}>
        <AddNewCard />
        <Divider />
        <Section1 />
        <Divider />
        <Section2 />
      </ScrollView>
    </ScreenContainerLayout>
  );
};
export default DashboardScreen;
