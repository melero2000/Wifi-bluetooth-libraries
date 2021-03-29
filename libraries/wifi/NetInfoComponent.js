import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import NetInfo from '@react-native-community/netinfo';

export default function NetInfoComponent() {
  const [wifiSSID, setWifiSSID] = useState('');
  const [wifiIP, setWifiIP] = useState('');

  // Subscribe
  const unsubscribe = NetInfo.addEventListener(state => {
    if (state.isWifiEnabled) {
      //solo android
      console.log('Wifi encendido');
    } else {
      console.log('Wifi apagado');
    }
  });

  NetInfo.fetch().then(state => {
    if (state.type == 'wifi') {
      setWifiSSID(state.details.ssid);
      setWifiIP(state.details.ipAddress);
    }
  });

  return (
    <>
      <Text>NET INFO LIBRARY</Text>
      <Text>SSID: {wifiSSID}</Text>
      <Text>IP: {wifiIP}</Text>
    </>
  );
}

const styles = StyleSheet.create({});
