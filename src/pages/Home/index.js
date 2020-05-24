import React, { useState } from 'react';
import { Alert, Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      Alert.alert('Abaixo do peso', 'Seu IMC: ' + imc.toFixed(2), [{ text: 'OK', style: 'cancel' }]);
    } else if (imc > 18.6 && imc < 24.9) {
      Alert.alert('Peso Ideal', 'Seu IMC: ' + imc.toFixed(2), [{ text: 'OK', style: 'cancel' }]);
    } else if (imc >= 25.0 && imc < 29.9) {
      Alert.alert('Sobrepeso', 'Seu IMC: ' + imc.toFixed(2), [{ text: 'OK', style: 'cancel' }]);
    } else if (imc >= 30.0 && imc < 39.9) {
      Alert.alert('Obesidade', 'Seu IMC: ' + imc.toFixed(2), [{ text: 'OK', style: 'cancel' }]);
    } else if (imc > 40.0) {
      Alert.alert('Obesidade Grave', 'Seu IMC: ' + imc.toFixed(2), [{ text: 'OK', style: 'cancel' }]);
    }

    setPeso('');
    setAltura('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC:</Text>
      <TextInput
        style={styles.input}
        keyboardType='number-pad'
        placeholder="Peso (em Kg)"
        placeholderTextColor="#FFF"
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
      />
      <TextInput
        style={styles.input}
        keyboardType='number-pad'
        placeholder="Altura (em Cm)"
        placeholderTextColor="#FFF"
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}
