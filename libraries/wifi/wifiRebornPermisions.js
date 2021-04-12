import {PermissionsAndroid} from 'react-native';

import WifiManager from 'react-native-wifi-reborn';

// Android only: Location permission
export const androidWifiLocationPermision = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location permission is required for WiFi connections',
        message:
          'This app needs location permission as this is required  ' +
          'to scan for wifi networks.',
        buttonNegative: 'DENY',
        buttonPositive: 'ALLOW',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // You can now use react-native-wifi-reborn
      console.log('Android: permisos location OK');
      return true;
    } else {
      // Permission denied
      console.log('Android: permisos location DENIED');
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
