import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, PermissionsAndroid} from 'react-native';

import WifiManager from 'react-native-wifi-reborn';

export default function WifiRebornComponent() {
  const [wifiStatuts, setWifiStatus] = useState('');
  const [wifiSSID, setWifiSSID] = useState('');
  const [wifiIP, setWifiIP] = useState('');

  WifiManager.getCurrentWifiSSID().then(
    ssid => {
      setWifiSSID(ssid);
    },
    () => {
      setWifiSSID('Cannot get current SSID!');
    },
  );

  WifiManager.isEnabled().then(status => {
    if (status) {
      //===true
      setWifiStatus('encendido');
    } else {
      setWifiStatus('apagado');
    }
  });

  WifiManager.getIP().then(ip => {
    setWifiIP(ip);
  });

  return (
    <View>
      <Text>WIFI REBORN LIBRARY</Text>
      <Text>El SSID actual de la red es: {wifiSSID}</Text>
      <Text>El estado del es: {wifiStatuts}</Text>
      <Text>La IP actual es: {wifiIP}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
