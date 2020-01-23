import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Teste</Text>
      <Text >Outro teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333', // roxo da Rocketseat
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    color: '#79FAAA',
    fontSize: 32,
    fontWeight: "bold",
  }
});
