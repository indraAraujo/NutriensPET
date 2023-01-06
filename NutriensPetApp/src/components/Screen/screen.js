import React from 'react';
import {ScreenView} from './styles';

const Screen = props => {
  return (
    <ScreenView scrollEnabled={props.isScrollable || false}>
      {props.children}
    </ScreenView>
  );
};

export default Screen;
