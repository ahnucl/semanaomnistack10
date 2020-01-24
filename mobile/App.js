import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Finalmenteeee!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1', // roxo da Rocketseat
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: "bold",
  }
});
