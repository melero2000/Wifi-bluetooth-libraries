import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ConnectivityManager from 'react-native-connectivity-status'; //lib3

export default function ConnectivityManagerComponent() {
  /*-----------------LIB3 -connectivity-status ------------------*/
  //suscribe
  const connectivityStatusSubscription = ConnectivityManager.addStatusListener(
    ({eventType, status}) => {
      switch (eventType) {
        case 'bluetooth':
          console.log(`Bluetooth is ${status ? 'ON' : 'OFF'}`);
          break;
      }
    },
  );

  return (
    <View>
      <Text>ConnectivityManagerComponent LIBRARY</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
