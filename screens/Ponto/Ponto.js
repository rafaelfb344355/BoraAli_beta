import React from 'react';
import { Text, View, Image, Alert, Linking } from 'react-native';
import {styles} from './styles';
import { Card, Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const Ponto = ({ navigation, route }) => {
  const { _id, Nome, descriçao, horario, valoringresso, picture } = route.params.item;

  const openCalendar = () => {
    // Substitua os valores pelos dados corretos para criar o evento no calendário
    const event = {
      title: Nome,
      startDate: new Date(),
      endDate: new Date(),
      location: "Local do evento"
    };
    const url = Platform.select({
      ios: `calshow:${event.startDate.getTime()}`,
      android: `content://com.android.calendar/time/${event.startDate.getTime()}`
    });
    Linking.openURL(url);
  };

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{ uri: picture }} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{Nome}</Text>
      </View>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.description}>{descriçao}</Text>
          <Text style={styles.schedule}>Horário de Funcionamento: {horario}</Text>
          <Text style={styles.ticket}>Valor do Ingresso: R$ {valoringresso}</Text>
        </Card.Content>
      </Card>
      <View style={styles.buttonContainer}>
        <Button
          icon="map"
          mode="contained"
          style={styles.button1}
          onPress={() => navigation.navigate('Map')}
        >
           <Text style={styles.buttontext1} >Ver no Mapa</Text>
        </Button>
        <Button
          icon="calendar-plus"
          mode="contained"
          style={styles.button2}
          onPress={openCalendar}
        >
         <Text style={styles.buttontext2} >Agendar</Text>
        </Button>
      </View>
    </View>
  );
};



export default Ponto;
