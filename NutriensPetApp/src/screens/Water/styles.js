import styled from 'styled-components';
import {Text, View} from 'react-native';

export const Body = styled(View)(() => ({
  paddingHorizontal: '5%',
}));

export const ImportantInfo = styled(Text)(() => ({
  fontSize: 14,
  fontWeight: 'bold',
  color: '#D7B30B',
  textAlign: 'left',
  marginTop: '5%',
}));

export const Info = styled(Text)(() => ({
  fontSize: 14,
  color: 'black',
  textAlign: 'justify',
  marginTop: '5%',
}));

export const AlertView = styled(View)(() => ({
  width: '100%',
  alignItems: 'center',
}));
