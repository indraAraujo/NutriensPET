import React from 'react';
import {Shadow} from '../ItemCard/styles';
import {AlertText, AlertView} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Alert = props => {
  return (
    <>
      <Shadow width="90%" marginBottom="1%">
        <AlertView>
          <Icon name="alert-circle-outline" size={40} color={'black'} />
          <AlertText>{props.text} </AlertText>
        </AlertView>
      </Shadow>
    </>
  );
};

export default Alert;
