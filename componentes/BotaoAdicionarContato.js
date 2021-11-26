import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';

const BotaoAdicionarContato = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={70}
      color={'white'}
    />
  );
};

export default BotaoAdicionarContato;
