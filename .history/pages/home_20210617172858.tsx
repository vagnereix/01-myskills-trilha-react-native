import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform, 
    TouchableOpacity 
} from 'react-native';

export function Home() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Olá Vagner, tudo bem?</Text>

        <TextInput 
            style={styles.input} 
            placeholder="Conte-nos como se sente"
            placeholderTextColor="#555"
        />

        <TouchableOpacity style={styles.touch}>
            <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: '#121015',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    borderRadius: 8,
    backgroundColor: '#1f1e25',
    fontSize: 18,
    padding: Platform.OS == 'android' ? 10 : 15,
  },
  touch: {
    backgroundColor: 'purple',
    marginTop: 10,
    padding: 15,
    borderRadius: 8
  }
});