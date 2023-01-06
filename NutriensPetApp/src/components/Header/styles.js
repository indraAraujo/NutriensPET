import styled from 'styled-components';
import {Dimensions, View} from 'react-native';
export const Row = styled(View)(props => ({
  width: Dimensions.get('screen').width,
  backgroundColor: !props.isHome && '#313131',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: props.isHome && 'space-between',
  padding: '5%',
}));
