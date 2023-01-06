import styled from 'styled-components';
import {View, Text} from 'react-native';

export const AlertView = styled(View)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#FEBA7B',
  borderRadius: 10,
  paddingVertical: '2%',
  paddingHorizontal: '2%',
  alignItems: 'center',
});

export const AlertText = styled(Text)({
  fontSize: 20,
  fontWeight: 'bold',
  color: 'black',
  marginLeft: 10,
});
