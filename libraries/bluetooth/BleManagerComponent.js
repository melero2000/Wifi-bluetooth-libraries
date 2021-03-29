import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules, // necesitado por la libreria
  NativeEventEmitter, // necesitado por la libreria
} from 'react-native';

import BleManager, {start} from 'react-native-ble-manager'; //LIB2
const BleManagerModule = NativeModules.BleManager; //LIB2
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule); //LIB2

export default function BleManagerComponent() {
  /*-----------------LIB2-BleManager------------------*/
  //Inicia el módulo del ble
  BleManager.start({showAlert: false}).then(() => {
    // Success code
    console.log('Module initialized');
  });

  //Pide permiso para activar el bluetooth
  BleManager.enableBluetooth()
    .then(() => {
      // Success code
      console.log('The bluetooth is already enabled or the user confirm');
    })
    .catch(error => {
      // Failure code
      console.log('The user refuse to enable bluetooth');
    });

  const startScan = () => {
    BleManager.scan([], 5, true).then(() => {
      // Success code
      console.log('Scan started');
    });
  };

  const stopScan = () => {
    BleManager.stopScan().then(result => {
      // Success code
      console.log('Scan stopped' + result);
    });
  };

  return (
    <View>
      <Text>BLE MANAGER LIBRARY</Text>
      <Button title="scan" onPress={startScan}></Button>
      <Button title="stop scan" onPress={stopScan}></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
