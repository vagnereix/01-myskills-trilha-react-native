import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Feelings() {
    <TouchableOpacity
      style={styles.buttonFeeling}
      activeOpacity={0.8}>
      <Text style={styles.textFeeling}>{feeling}</Text>
    </TouchableOpacity>;
}

const styles = StyleSheet.create({
  buttonFeeling: {
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#1f1e25',
    padding: 20,
    marginTop: 10,
  },
  textFeeling: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});