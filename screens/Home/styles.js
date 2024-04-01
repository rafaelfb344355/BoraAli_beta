import { StyleSheet,
         Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    lineargradient: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundContainer: {
      flex: 1,
      width: '100%',
    },
    backgroundImage: {
      flex: 1,
      width: '100%',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: height * 0.2, // Ajuste a margem superior conforme necessário
    },
    cartao: {
      width: width * 0.9, // Ajuste a largura do cartão conforme necessário
      height: '70%', // Ajuste a altura do cartão conforme necessário
      alignItems: 'center',
    },
    cartaoS: {
      alignItems: 'flex-start',
      margin: 30,
      padding: 10,
    },
    heading: {
      color: '#FFB70B',
      fontWeight: 'bold',
      fontSize: 40,
      textShadowColor: 'rgba(0, 0, 0, 0.503)',
      textShadowOffset: { width: 0, height: 4 },
      textShadowRadius: 4,
    },
    subheading: {
      color: '#FFB70B',
      fontWeight: 'bold',
      fontSize: 30,
      textShadowColor: 'rgba(0, 0, 0, 0.503)',
      textShadowOffset: { width: 0, height: 4 },
      textShadowRadius: 4,
    },
    paragraph: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
      marginVertical: 20,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF',
      borderColor: '#FFFAF5',
      borderWidth: 1,
      borderRadius: width * 0.2,
      width: '70%',
      height: height * 0.06,
    },
    button2: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: width * 0.2,
      width: '70%',
      height: height * 0.06,
      marginTop: 8,
    },
    buttonText: {
      color: '#162397',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

