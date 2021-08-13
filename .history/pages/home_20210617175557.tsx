import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform, 
    TouchableOpacity 
} from 'react-native';

export function Home() {
    const [feeling, setFeeling] = useState<string>('');

    function handleClick() {
        alert(feeling)
    }

    function handleChange(feeling: string) {
        setFeeling(feeling)
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Olá Vagner, tudo bem?</Text>

        <TextInput
          onChangeText={handleChange}
          style={styles.input}
          placeholder="Conte-nos como se sente"
          placeholderTextColor="#555"
        />

        <TouchableOpacity style={styles.touch} onPress={handleClick}>
          <Text style={styles.touchText}>Enviar</Text>
        </TouchableOpacity>

        <Text style={[styles.title, {marginTop: 50}]}>Se sentindo:</Text>
        <Text style={[styles.title, styles.feeling]}>{ feeling }</Text>
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
    backgroundColor: '#a370f7',
    marginTop: 10,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  touchText: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#fff'
  },
  feeling: {
      fontSize: 14,
      marginTop: 10
  }
});