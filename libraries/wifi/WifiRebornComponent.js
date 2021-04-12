import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  PermissionsAndroid,
  FlatList,
} from 'react-native';

import WifiManager from 'react-native-wifi-reborn';
import {androidWifiLocationPermision} from './wifiRebornPermisions';

export default function WifiRebornComponent() {
  const [wifiStatuts, setWifiStatus] = useState('');
  const [wifiSSID, setWifiSSID] = useState('');
  const [wifiIP, setWifiIP] = useState('');
  const [wifiList, setWifiList] = useState([]);

  const locationPermision = async () => {
    try {
      let result = await androidWifiLocationPermision();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    locationPermision();

    WifiManager.loadWifiList().then(wifiList => {
      setWifiList(wifiList);
      console.log(wifiList);
    });

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
  }, []);

  /**---------------RENDER ITEMS WIFI LIST----------- */
  const Item = ({bssid, ssid, frequency, level}) => (
    <View style={styles.wifiListItem}>
      <Text>bssid: {bssid}</Text>
      <Text>ssid: {ssid}</Text>
      <Text>frequency: {frequency}</Text>
      <Text>level: {level}</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <Item
      bssid={item.BSSID}
      ssid={item.SSID}
      frequency={item.frequency}
      level={item.level}
    />
  );
  /**-------------------------- */

  return (
    <View>
      <Text>WIFI REBORN LIBRARY</Text>
      <Text>- SSID {wifiSSID}</Text>
      <Text>- Status {wifiStatuts}</Text>
      <Text>- IP {wifiIP}</Text>
      <Button
        title="Turn on wifi"
        onPress={() => WifiManager.setEnabled(true)}
      />
      <Text>Wifi list: </Text>
      <FlatList
        data={wifiList}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wifiListItem: {
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 10,
    marginVertical: 10,
  },
});
