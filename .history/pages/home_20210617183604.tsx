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
    const [feelings, setFeelings] = useState<string[]>([]);

    function handleChange(feeling: string) {
        setFeeling(feeling)
    }

    function handleClick() {
        setFeelings(oldFeelings => [...oldFeelings, feeling]);
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

        <Text style={[styles.title, {marginTop: 40}]}>Se sentindo:</Text>

        {
            feelings.map(
                feeling => (
                    <TouchableOpacity 
                        key={feeling} 
                        style={styles.buttonFeeling}
                        activeOpacity={.8}
                    >
                        <Text style={styles.textFeeling}>
                            {feeling}
                        </Text>
                    </TouchableOpacity>
                )
            )
        }
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
    fontSize: 24
  },
  input: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#1f1e25',
    fontSize: 18,
    padding: Platform.OS == 'android' ? 15 : 15,
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
      color: '#fff',
      fontSize: 18,
      marginTop: 5
  },
  buttonFeeling: {
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#1f1e25',
    padding: 20,
    marginTop: 10
  },
  textFeeling: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
});