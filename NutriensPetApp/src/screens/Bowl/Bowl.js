import React, {useState} from 'react';
import Header from '../../components/Header/header';
import {AlertView, Body, ImportantInfo, Info} from './styles';
import Screen from '../../components/Screen/screen';
import {Card, Shadow} from '../../components/ItemCard/styles';
import Alert from '../../components/Alert/alert';
import Menu from '../../components/Menu/menu';

const Bowl = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      <Screen isScrollable={true}>
        <Header title="Comedor" setShowMenu={setShowMenu} />
        <Body>
          <Shadow
            marginTop="10%"
            style={{height: 250}}
            marginBottom={showAlert ? '5%' : '15%'}>
            <Card>
              <Info>Gráfico aqui</Info>
            </Card>
          </Shadow>
          {showAlert && (
            <AlertView>
              <Alert text="" />
            </AlertView>
          )}
          <ImportantInfo>Informações Importantes</ImportantInfo>
          <Info>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultrices sed neque sit amet ullamcorper. Morbi eleifend metus vitae
            ultrices volutpat. Suspendisse potenti. Nullam sed mollis nulla, vel
            egestas nunc. Nunc congue nisl nunc, vel porta mauris ornare sit
            amet. Nulla at blandit massa, in eleifend magna. Curabitur sodales
            eros quis semper tempor.
          </Info>
          <Info>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultrices sed neque sit amet ullamcorper. Morbi eleifend metus vitae
            ultrices volutpat. Suspendisse potenti. Nullam sed mollis nulla, vel
            egestas nunc. Nunc congue nisl nunc, vel porta mauris ornare sit
            amet. Nulla at blandit massa, in eleifend magna. Curabitur sodales
            eros quis semper tempor.
          </Info>
        </Body>
        <Menu isOpen={showMenu} setShowModal={setShowMenu} />
      </Screen>
    </>
  );
};

export default Bowl;
