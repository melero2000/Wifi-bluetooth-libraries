/**Para usar cada librería simplemente se descomenta el componente de la librería que se quiera usar. */

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

/**Bluetooth */
import BlePlxComponent from './libraries/bluetooth/BlePlxComponent'; //lib1
import BleManagerComponent from './libraries/bluetooth/BleManagerComponent'; //lib2
import ConnectivityManagerComponent from './libraries/bluetooth/ConnectivityManagerComponent'; //lib3
import BluetoothStateManagerComponent from './libraries/bluetooth/BluetoothStateManagerComponent'; //lib4

/**Wifi */
import WifiRebornComponent from './libraries/wifi/WifiRebornComponent';
import NetInfoComponent from './libraries/wifi/NetInfoComponent';

export default function App() {
  return (
    <View>
      <Text>Bluetooth</Text>
      <View>
        {/*<NetInfoStateComponent />*/}
        {/*<ConnectivityManagerComponent />*/}
        {/*<BleManagerComponent />*/}
        {/*<BluetoothStateManagerComponent />*/}
      </View>

      <Text>-------------------</Text>

      <Text>Wifi</Text>
      <View>
        {/*<WifiRebornComponent />*/}
        {/*<NetInfoComponent />*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
