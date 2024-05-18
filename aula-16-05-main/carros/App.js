import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { } from './components';

import CarCountComponent from '../components/CarCountComponent';
import CarInputComponent from '../components/CarinputComponent';
import CarListComponent from '../components/CarListComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <CarCountComponent />
      <CarInputComponent />
      <CarListComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
