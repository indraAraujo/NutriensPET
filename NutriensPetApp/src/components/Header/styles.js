import styled from 'styled-components';
import {Dimensions, View} from 'react-native';
export const Row = styled(View)(isHome => ({
  width: Dimensions.get('screen').width,
  color: !isHome && '#313131',
}));
