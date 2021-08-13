import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Home() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>MUAAHAHAHAH</Text>
        <Text></Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121015'
    },
    text: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 24,
    }
})