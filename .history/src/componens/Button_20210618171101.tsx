import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

export function Button() {
    return (
      <TouchableHighlight 
        style={styles.touch} 
        onPress={handleClick}
      >
        <Text style={styles.touchText}>Enviar</Text>
      </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
  touch: {
    backgroundColor: '#a370f7',
    marginTop: 10,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  touchText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});