import React, {FC} from 'react';
import {Text, View} from 'react-native';

const CredCard: FC<CredCardProps> = ({password, type, username}) => {
  return (
    <View>
      <Text>Username: {username}</Text>
      <Text>Password: {password}</Text>
      <Text>Type: {type}</Text>
    </View>
  );
};

export default CredCard;
View;
