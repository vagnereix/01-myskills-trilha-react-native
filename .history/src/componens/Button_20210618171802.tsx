import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

export function Button() {
    function handleClick() {
        alert('click')
    }
    
    return (
      <TouchableHighlight 
        style={styles.touch} 
        onPress={handleClick}
        underlayColor='#b189f1'
        // activeOpacity={0.1}
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