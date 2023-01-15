import styled from 'styled-components';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';

export const Container = styled(View)({
  width: '50%',
  backgroundColor: '#313131',
  height: Dimensions.get('screen').height,
  alignItems: 'center',
  paddingTop: '5%',
});

export const CloseView = styled(View)({
  width: '100%',
  alignItems: 'flex-end',
  paddingRight: 10,
});

export const Row = styled(TouchableOpacity)(props => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: props.marginTop,
  width: '80%',
}));

export const Title = styled(Text)({
  fontSize: 20,
  fontWeight: 'bold',
  color: 'white',
  marginLeft: 10,
});

export const Divider = styled(View)({
  width: '60%',
  borderWidth: 1,
  borderColor: 'white',
  marginTop: 20,
  marginBottom: 20,
});
