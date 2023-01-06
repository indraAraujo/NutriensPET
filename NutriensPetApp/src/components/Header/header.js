import React from 'react';
import {Row, Title, TitleView} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoSmall from '../LogoSmall/logoSmall';

const Header = ({isHome = false, title = ''}) => {
  return (
    <Row isHome={isHome}>
      <Icon
        name="menu"
        size={isHome ? 32 : 50}
        color={isHome ? 'black' : '#FBD10D'}
      />
      {isHome && <LogoSmall />}
      {!isHome && (
        <TitleView>
          <Title>{title}</Title>
        </TitleView>
      )}
    </Row>
  );
};

export default Header;
