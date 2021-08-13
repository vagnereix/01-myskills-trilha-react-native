import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export function Home() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>MUAAHAHAHAH</Text>

        <TextInput style={styles.input} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 70,
        backgroundColor: '#121015'
    },
    title: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 24,
    },
    input: {
        backgroundColor: '#1f1e25'
    }
})