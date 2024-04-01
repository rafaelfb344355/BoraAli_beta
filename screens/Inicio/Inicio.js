import React, { useEffect, useState } from 'react';
import {Text, View, Image, FlatList, Alert } from 'react-native';
import { Card, FAB } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import {styles} from './styles';

const Inicio = ({ navigation, route }) => {
  const { userId} = route.params;
  const [PontoTuristicos, setPontoTuristicos] = useState([]);

  useEffect(() => {
    fetchPontoTuristicos();
  }, []);

  const fetchPontoTuristicos = async () => {
    try {
      const response = await fetch('https://server-bora-ali.vercel.app/poitTuristic/');
      const data = await response.json();
      console.log(data);
      setPontoTuristicos(data.poitTuristics);
    } catch (error) {
      console.error('Erro ao buscar os Ponto Turisticos:', error);
    }
  };
  
  const renderRecommendedCar = ({ item }) => {
    return (
      <Card
        style={styles.recommendedCard}
        onPress={() => navigation.navigate('Ponto', { item })}
      >
        <Image
          style={styles.recommendedImage}
          source={{ uri: item.picture1 || item.picture2 }}
        />
        <Text style={styles.recommendedTitle}>{item.Nome}</Text>
        
      </Card>
    );
  };
  
  const renderCarCard = ({ item }) => {
    return (
      <Card
        style={styles.card}
        onPress={() => navigation.navigate('Ponto', { item })}
      >
        <Image style={styles.cardImage} source={{ uri: item.picture1 || item.picture2 }} />
        <Text style={styles.title}>{item.Nome}</Text>
        
      </Card>
    );
  };

  const handleProfilePress = () => {
    if (userId) {
      navigation.navigate('Perfil', { userId });
    } else {
      Alert.alert('Você não está logado');
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['rgb(132, 0, 255)', '#6bc1ff']}
        style={{ flex: 1 }}
      >
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Recomendados</Text>
          <FlatList
            data={PontoTuristicos} // Apenas um item para a lista horizontal
            keyExtractor={(item, index) => item._id}
            renderItem={renderRecommendedCar}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.sectionTitle}>Todos os Pontos Turisticos </Text>
          <FlatList
            data={PontoTuristicos} // Exclui o primeiro item para a lista vertical
            keyExtractor={(item, index) => item._id}
            numColumns={3}
            renderItem={renderCarCard}
          />
          <View style={styles.footer}>
            <FAB
              onPress={() => navigation.navigate('Map')}
              style={styles.fab1}
              
              icon="map"
              theme={{ colors: { accent: '#006aff' } }}
            />
            <FAB
              onPress={handleProfilePress}
              style={styles.fab}
              icon="account"
              theme={{ colors: { accent: '#006aff' } }}
            />
            
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};




export default Inicio;
