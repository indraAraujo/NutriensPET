import React from 'react';
import {Row, Title, TitleView} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoSmall from '../LogoSmall/logoSmall';
import {TouchableOpacity} from 'react-native';

const Header = ({isHome = false, title = '', setShowMenu}) => {
  return (
    <Row isHome={isHome}>
      <TouchableOpacity onPress={() => setShowMenu(true)}>
        <Icon
          name="menu"
          size={isHome ? 32 : 50}
          color={isHome ? 'black' : '#FBD10D'}
        />
      </TouchableOpacity>
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
