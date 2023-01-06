import React from 'react';
import {
  Card,
  Logo,
  Row,
  Shadow,
  Subtitle,
  Title,
  Unity,
  Value,
  ValueRow,
} from './styles';
import food from '../../assets/food-black.png';
const ItemCard = props => {
  const getBackgroundColor = () => {
    switch (props.title) {
      case 'Comedor':
        return 'rgba(242, 208, 198, .64)';
      case 'Água':
        return 'rgba(198, 221, 242, .64)';
      case 'Alimentador':
        return 'rgba(199, 242, 198, .64)';
    }
  };
  return (
    <>
      <Shadow>
        <Card backgroundColor={getBackgroundColor()}>
          <Title>{props.title}</Title>
          <Subtitle>{props.dateTime}</Subtitle>
          <Row>
            <Logo source={food} />
            <ValueRow>
              <Value>{props.value}</Value>
              <Unity>{props.unity}</Unity>
            </ValueRow>
          </Row>
        </Card>
      </Shadow>
    </>
  );
};

export default ItemCard;
