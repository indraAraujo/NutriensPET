import styled from 'styled-components';
import {View, Text, Image} from 'react-native';
import {generateShadow} from '../../assets/generateShadow';

export const Shadow = styled(View)({
  width: '100%',
  ...generateShadow(8),
  backgroundColor: 'white',
  borderRadius: 10,
  marginBottom: '15%',
});

export const Card = styled(View)(props => ({
  borderRadius: 10,
  width: '100%',
  backgroundColor: props.backgroundColor || 'white',
  paddingHorizontal: '10%',
  paddingVertical: '10%',
}));

export const Title = styled(Text)(() => ({
  fontWeight: 'bold',
  fontSize: 20,
  color: 'black',
}));

export const Subtitle = styled(Text)(() => ({
  color: 'black',
  fontSize: 10,
}));

export const Row = styled(View)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '5%',
}));

export const ValueRow = styled(View)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
}));

export const Value = styled(Text)(() => ({
  color: 'black',
  fontSize: 40,
  fontWeight: 'bold',
}));

export const Unity = styled(Text)(() => ({
  color: 'black',
  fontSize: 16,
  fontWeight: 'bold',
  marginLeft: 5,
  marginBottom: '5%',
}));

export const Logo = styled(Image)(() => ({
  width: 32,
  height: 32,
}));
