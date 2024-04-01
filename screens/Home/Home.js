import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Alert, Dimensions } from 'react-native';
import { Card, FAB } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import {styles} from './styles';




const Home = ({ navigation, route }) => {
  
  const dataInicial = [
    {
      id: 1,
      textHeading: 'Seja',
      textSubheading: 'Bem-Vindo',
      textParagraph: 'Este é o BoraAlí. O teu app de turismo e cultura da cidade do Recife.',
      imageSource: require('../../assets/marcozero.jpg'),
    },
    {
      id: 2,
      textHeading: 'O que o Recife tem',
      textSubheading: 'pra te oferecer?!',
      textParagraph: 'Museus, praças, bares, eventos e muito mais. Tudo que a cidade tem de bom pra você!',
      imageSource: require('../../assets/ruadobomjesus.png'),
    },
    {
      id: 3,
      textHeading: 'BoraAlí',
      textSubheading: ' ',
      textParagraph: 'Conhecer a cidade mais linda e cultural em linha reta do mundo!?',
      imageSource: require('../../assets/torredecristal.jpg'),
    },
  ];

  const [currentId, setCurrentId] = useState(0);
  const [state, setState] = useState(dataInicial[currentId]);
  
  const handleContinue = () => {
    if (currentId < dataInicial.length - 1) {
      setCurrentId(currentId + 1);
      setState(dataInicial[currentId + 1]);
    } else {
      navigation.navigate('Login');
    }
  };

  const handleVoltar = () => {
    if (currentId > 0) {
      setCurrentId(currentId - 1);
      setState(dataInicial[currentId - 1]);
    } else {
      navigation.navigate('Inicio');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={state.imageSource}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          <LinearGradient
            colors={['rgba(255, 145, 0, 1)', 'rgba(0, 60, 255, 0.770)', 'rgba(5, 26, 216, 0.270)']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.lineargradient}
          >
            <View style={styles.content}>
              <View style={styles.cartao}>
                <View style={styles.cartaoS}>
                  <Text style={styles.heading}>{state.textHeading}</Text>
                  <Text style={styles.subheading}>{state.textSubheading}</Text>
                  <Text style={styles.paragraph}>{state.textParagraph}</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>
                  {currentId === dataInicial.length - 1 ? 'Entrar' : 'Continuar'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button2} onPress={handleVoltar}>
                <Text style={styles.buttonText}>
                  {currentId === 0 ? 'Pular' : 'Voltar'}
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </View>
  );
};


export default Home;
