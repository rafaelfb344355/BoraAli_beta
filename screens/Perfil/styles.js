import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    profileContainer: {
      alignItems: 'center',
      marginTop: -50,
    },
    profileImage: {
      width: 140,
      height: 140,
      borderRadius: 140 / 2,
      marginTop: 10,
    },
    profileName: {
      marginTop: 10,
      fontSize: 20,
      fontWeight: 'bold',
    },
    card: {
      margin: 10,
      padding: 10,
      width: '90%',
    },
    cardContent: {
      flexDirection: 'row',
      paddingVertical: 5,
    },
    cardText: {
      marginRight:100,
      color:'black',
      fontSize: 16,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      width: '100%',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });