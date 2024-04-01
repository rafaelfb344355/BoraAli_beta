import React, { useEffect, useState } from 'react';
import { View, Alert, Text, TouchableOpacity, Linking, Switch } from 'react-native';
import {styles} from './styles';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = () => {
  const [location, setLocation] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedTouristSpots, setSelectedTouristSpots] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    getLocationPermission();
    loadTouristSpots();
  }, []);

  const getLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão de localização negada');
      return;
    }

    getCurrentLocation();
  };

  const getCurrentLocation = async () => {
    try {
      const { coords } = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = coords;
      setLocation({ latitude, longitude });
      setUserLocation({ latitude, longitude });
    } catch (error) {
      Alert.alert('Erro ao obter a localização', error.message);
    }
  };

  const loadTouristSpots = () => {
    const touristSpots = [
      { name: 'Recife Antigo', latitude: -8.0636129, longitude: -34.8719446 },
      { name: 'Praia de Boa Viagem', latitude: -8.1236943, longitude: -34.9000476 },
      { name: 'Mercado de São José', latitude: -8.0624942, longitude: -34.8799971 },
      { name: 'Parque da Jaqueira', latitude: -8.0350462, longitude: -34.9040177 },
    ];

    setMarkers(touristSpots);
  };

  const handleCreateRoute = () => {
    if (selectedTouristSpots.length === 0) {
      Alert.alert('Selecione pelo menos um ponto turístico');
      return;
    }

    const coordinates = selectedTouristSpots
      .map(stop => `${stop.latitude},${stop.longitude}`)
      .join('/');

    const origin = `${userLocation.latitude},${userLocation.longitude}`;
    const url = `https://www.google.com/maps/dir/${origin}/${coordinates}`;

    Linking.openURL(url);
  };

  const handleSwitchToggle = (spot) => {
    const isSelected = selectedTouristSpots.some(
      selectedSpot => selectedSpot.name === spot.name
    );

    if (isSelected) {
      setSelectedTouristSpots(prevSpots =>
        prevSpots.filter(selectedSpot => selectedSpot.name !== spot.name)
      );
    } else {
      setSelectedTouristSpots(prevSpots => [...prevSpots, spot]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapcontainer}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.1092,
            longitudeDelta: 0.0701,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Você está aqui"
          />

          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              title={marker.name}
            >
              <Callout>
                <Text>{marker.name}</Text>
              </Callout>
            </Marker>
          ))}
        </MapView>
      )}
</View>
      <View style={styles.card}>
        <Text style={styles.modalTitle}>Pontos Turísticos</Text>

        {markers.map((spot, index) => (
          <View key={index} style={styles.switchContainer}>
            <Switch
              value={selectedTouristSpots.some(
                selectedSpot => selectedSpot.name === spot.name
              )}
              onValueChange={() => handleSwitchToggle(spot)}
            />
            <Text style={styles.switchLabel}>{spot.name}</Text>
          </View>
        ))}
        <View style={styles.bt}>
        <TouchableOpacity style={styles.button}  onPress={handleCreateRoute}>
                <Text style={styles.buttonText}>
                Criar rota
                </Text>
              </TouchableOpacity>
              </View>
      </View>
    </View>
  );
};

export default Map;
