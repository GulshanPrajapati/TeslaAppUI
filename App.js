import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Caritems from './Componensts/CarItems/index';
import Menu from './Componensts/Menu/index';

export default function App() {
  return (
    <View>
      <Caritems/>
    </View>
  );
}
