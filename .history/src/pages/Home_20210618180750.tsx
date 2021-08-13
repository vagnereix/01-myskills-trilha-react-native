import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { Feelings } from '../components/Feelings';

export function Home() {
    const [feeling, setFeeling] = useState<string>('');
    const [feelings, setFeelings] = useState<string[]>([]);

    function handleChange(feeling: string) {
        setFeeling(feeling)
    }

    function handleClick() {
        setFeelings(oldFeelings => [...oldFeelings, feeling])
        setFeeling('')
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Olá Vagner, tudo bem?</Text>

        <TextInput
          value={feeling}
          onChangeText={handleChange}
          style={styles.input}
          placeholder="Conte-nos como se sente"
          placeholderTextColor="#555"
        />

        <Button handleClick={handleClick} />

        <Text style={[styles.title, {marginTop: 40}]}>Se sentindo:</Text>

        <FlatList
          data={feelings}
          keyExtractor={(item) => item }
          renderItem={({ item }) => <Feelings key={feeling} feeling={item} />}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 70,
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
    padding: Platform.OS == 'android' ? 15 : 20,
  },
  feeling: {
      color: '#fff',
      fontSize: 18,
      marginTop: 5
  },
});