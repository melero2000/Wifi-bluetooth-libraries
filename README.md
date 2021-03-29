# Wifi-bluetooth-libraries
Algunas pruebas en diferentes librerías de Bluetooth y Wifi para React Native.
Son pruebas de algunas pequeñas funciones de las librerías.

## Librerías probadas
- Bluetooth:
  - react-native-ble-plx (https://github.com/Polidea/react-native-ble-plx) 
  - react-native-ble-manager (https://github.com/innoveit/react-native-ble-manager) 
  - react-native-bluetooth-state-manager (https://github.com/patlux/react-native-bluetooth-state-manager)
  - react-native-connectivity-status (https://github.com/nearit/react-native-connectivity-status)
 
- Wifi:
  - react-native-wifi-reborn (https://github.com/JuanSeBestia/react-native-wifi-reborn) 
  - react-native-netinfo (https://github.com/react-native-netinfo/react-native-netinfo)
  
 ## Uso
El archivo App.js contiene diferentes componentes, cada componente hace referencia a una librería, 
para probarlo simplemente hay que descomentar el componente con el nombre de la librería que se quiera probar. 
Estos componentes están situados en la carpeta “libraries” dentro de la cual hay 2 subcarpetas “Wifi” y “Bluetooth” en ellas se encuentran los componentes, 
para hacer diferentes pruebas se debe cambiar el código de dentro de los componentes y después utlizarlo en el App.js.
