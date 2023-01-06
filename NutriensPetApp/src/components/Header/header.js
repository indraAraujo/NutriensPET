import React from 'react';
import {Row} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoSmall from '../LogoSmall/logoSmall';

const Header = ({isHome = false}) => {
  return (
    <Row isHome>
      <Icon name="menu" size={32} color={isHome ? 'black' : 'white'} />
      <LogoSmall />
    </Row>
  );
};

export default Header;
