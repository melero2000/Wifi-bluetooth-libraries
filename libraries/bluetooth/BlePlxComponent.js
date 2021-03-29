import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {BleManager} from 'react-native-ble-plx';

export default function NetInfoStateComponent() {
  /*-----------------LIB1-Ble PLX------------------*/

  const [bltStatus, setBltStatus] = useState('');

  const manager = new BleManager();

  const subscription = manager.onStateChange(state => {
    if (state === 'PoweredOn') {
      setBltStatus('Bluetooth ON');
    } else {
      setBltStatus('Bluetooth OFF');
    }
  }, false);

  return (
    <View>
      <Text>BLE PLX LIBRARY</Text>
      <Text>{bltStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
