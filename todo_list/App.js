import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer'

export default function App() {
  return (
    <View style={styles.container}>
      <Timer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d26',
    justifyContent: 'center',
  },
});
