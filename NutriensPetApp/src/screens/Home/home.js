import React, {useState} from 'react';
import Header from '../../components/Header/header';
import ItemCard from '../../components/ItemCard/itemCard';
import {Body, Title} from './styles';
import Screen from '../../components/Screen/screen';
import Menu from '../../components/Menu/menu';

const info = [
  {
    id: 0,
    title: 'Comedor',
    value: 400.0,
    unity: 'g',
    dateTime: '10/12/2023 10:40',
  },
  {
    id: 1,
    title: 'Água',
    value: 24.0,
    unity: '˚C',
    dateTime: '10/12/2023 10:40',
  },
  {
    id: 2,
    title: 'Alimentador',
    value: 2.5,
    unity: 'kg',
    dateTime: '10/12/2023 10:40',
  },
];

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Screen isScrollable={true}>
        <Header isHome setShowMenu={setShowMenu} />
        <Title>Atualizações</Title>
        <Body>
          {info?.map(item => (
            <ItemCard
              key={item.id}
              title={item.title}
              value={item.value}
              unity={item.unity}
              dateTime={item.dateTime}
            />
          ))}
        </Body>
        <Menu isOpen={showMenu} setShowModal={setShowMenu} />
      </Screen>
    </>
  );
};

export default Home;
