import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import BluetoothStateManager from 'react-native-bluetooth-state-manager';

export default function BluetoothStateManagerComponent() {
  /*-----------------LIB4-BleManager------------------*/
  BluetoothStateManager.getState().then(bluetoothState => {
    //console.log(bluetoothState);
  });

  //Comprueba si se enciende o apaga el bluetooth
  BluetoothStateManager.onStateChange(bluetoothState => {
    console.log(bluetoothState);
  }, true /*=emitCurrentState*/);

  //Abre las opciones de bluetooth
  const openSettings = () => {
    BluetoothStateManager.openSettings();
  };

  //Pregunta si puede encender el bluetooth sin salir de la app
  const enableBluetooth = () => {
    BluetoothStateManager.requestToEnable().then(result => {
      if (result) {
        console.log('Aceptado');
      } else {
        //si ya está activado dará false y entrará aquí
        console.log('Denegado');
      }
    });
  };

  /*Activar bluetooth sin interacción del usuario*/
  /*BluetoothStateManager.enable().then((result) => {
    // do something...
  });*/

  return (
    <View>
      <Text>BluetoothStateManagerComponent LIBRARY</Text>
      <Button title="Open bluetooth settings" onPress={openSettings}></Button>
      <Button title="Enable bluetooth" onPress={enableBluetooth}></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
