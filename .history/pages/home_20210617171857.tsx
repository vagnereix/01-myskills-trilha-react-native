import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export function Home() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Olá, Vagner</Text>

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
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10
    },
    input: {
        borderRadius: 7,
        backgroundColor: '#1f1e25',
        fontSize: 18,
        padding: 15,
    }
})