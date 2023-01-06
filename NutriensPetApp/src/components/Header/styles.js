import styled from 'styled-components';
import {Dimensions, View, Text} from 'react-native';

export const Row = styled(View)(props => ({
  width: Dimensions.get('screen').width,
  backgroundColor: !props.isHome && '#313131',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: props.isHome && 'space-between',
  padding: '5%',
  alignItems: 'center',
}));

export const TitleView = styled(View)({
  width: '80%',
  alignItems: 'center',
});

export const Title = styled(Text)({
  fontSize: 36,
  color: '#FBD10D',
  fontWeight: 'bold',
});
