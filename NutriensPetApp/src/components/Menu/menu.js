import React from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoBig from '../LogoBig/logoBig';
import {CloseView, Container, Divider, Row, Title} from './styles';

const screens = [
  {
    id: 0,
    title: 'Home',
    logo: 'home-variant-outline',
  },
  {
    id: 1,
    title: 'Comedor',
    logo: 'home-variant-outline',
  },
  {
    id: 2,
    title: 'Água',
    logo: 'home-variant-outline',
  },
  {
    id: 3,
    title: 'Alimentador',
    logo: 'home-variant-outline',
  },
];
const Menu = props => {
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.isOpen}
        onRequestClose={() => {
          props.setShowModal(false);
        }}>
        <Container>
          <CloseView>
            <TouchableOpacity onPress={() => props.setShowModal(false)}>
              <Icon name="close" size={32} color="#FBD10D" />
            </TouchableOpacity>
          </CloseView>
          <LogoBig />
          {screens.map(item => (
            <>
              <Row
                key={item.id}
                marginTop={item.title === 'Home' ? '20%' : '10%'}>
                <Icon name={item.logo} size={32} color="#FBD10D" />
                <Title>{item.title}</Title>
              </Row>
              {item.title === 'Home' && <Divider />}
            </>
          ))}
        </Container>
      </Modal>
    </>
  );
};

export default Menu;
