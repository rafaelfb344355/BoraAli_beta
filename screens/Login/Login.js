import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import {styles} from './styles';

export default function Login({ navigation }) {
    const userId = null;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await axios.post('https://server-bora-ali.vercel.app/user/login', {
          email,
          password,
        });
  
        if (response.status === 200) {
          const { userId } = response.data;
          console.log(userId);
          navigation.navigate('Perfil', { userId });
          Alert.alert('Login bem-sucedido');
          // Execute ação desejada após o login
        } else {
          Alert.alert('Credenciais inválidas');
        }
      } catch (error) {
        Alert.alert('Erro ao fazer login');
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>BoraAli!</Text>
        <Text style={styles.greeting}>E aí, pronto para turistar de novo?</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.link}>Cadastrar-se</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio',{userId})}>
          <Text style={styles.link}>Seguir sem login</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  
