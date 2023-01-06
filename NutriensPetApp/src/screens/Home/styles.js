import styled from 'styled-components';
import {Text, View} from 'react-native';

export const Title = styled(Text)(() => ({
  fontSize: 32,
  fontWeight: 'bold',
  color: 'black',
  paddingHorizontal: '5%',
  marginBottom: '10%',
}));

export const Body = styled(View)(() => ({
  paddingHorizontal: '5%',
  alignItems: 'center',
}));
