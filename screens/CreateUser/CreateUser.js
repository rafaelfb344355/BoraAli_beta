import React, { useState } from 'react';
import {
  Text,
  View,
  Modal,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {styles} from './styles';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CreateEmployee = ({ navigation, route }) => {
  const getDetails = (type) => {
    if (route.params) {
      switch (type) {
        case 'Nome':
          return route.params.Nome;
        case 'Email':
          return route.params.Email;
        case 'Senha':
          return route.params.Senha;
          case 'Curtidas':
          return route.params.Curtidas;
        case 'picture':
          return route.params.picture;
      }
    }
    return '';
  };

  const [Nome, setNome] = useState(getDetails('Nome'));
  const [Email, setEmail] = useState(getDetails('Email'));
  const [Senha, setSenha] = useState(getDetails('Senha'));
  const [Curtidas, setCurtidas] = useState(getDetails('Curtidas'));
  const [picture, setPicture] = useState(getDetails('picture'));
  const [modal, setModal] = useState(false);
  const [enableshift, setenableShift] = useState(false);

  const submitData = () => {
    fetch('https://server-bora-ali.vercel.app/user/add', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Nome,
        Email,
        Senha,
        Curtidas,
        picture,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.Nome} foi cadastrado com sucesso!`);
        navigation.navigate('Home');
      })
      .catch((err) => {
        Alert.alert('Algo deu errado: ' + err);
      });
  };

  const updateDetails = () => {
    fetch(`https://server-bora-ali.vercel.app/user/update/${route.params._id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Nome,
        Email,
        Senha,
        Curtidas,
        picture,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.Nome} foi editado com sucesso!`);
        navigation.navigate('Home');
      })
      .catch((err) => {
        Alert.alert('Algo deu errado ao atualizar o usuário');
      });
  };

  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split('.')[1]}`,
          name: `test.${data.uri.split('.')[1]}`,
        };
        handleUpload(newfile);
      }
    } else {
      Alert.alert('você precisa de permissão para isso');
    }
  };
  const pickFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split('.')[1]}`,
          name: `test.${data.uri.split('.')[1]}`,
        };
        handleUpload(newfile);
      }
    } else {
      Alert.alert('você precisa de permissão para isso');
    }
  };

  const handleUpload = (image) => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'employeeApp');
    data.append('cloud_name', 'dxnoiuj66');

    fetch('https://api.cloudinary.com/v1_1/dxnoiuj66/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPicture(data.url);
        setModal(false);
      })
      .catch((err) => {
        Alert.alert('erro durante o upload');
      });
  };

  return (
    <KeyboardAvoidingView behavior='position' style={styles.root} enabled={enableshift}>
      <View>
        <TextInput
          label='Nome'
          style={styles.inputStyle}
          value={Nome}
          onFocus={() => setenableShift(false)}
          theme={theme}
          mode='outlined'
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          label='Email'
          style={styles.inputStyle}
          value={Email}
          onFocus={() => setenableShift(false)}
          theme={theme}
          mode='outlined'
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label='Senha'
          style={styles.inputStyle}
          value={Senha}
          onFocus={() => setenableShift(false)}
          theme={theme}
          mode='outlined'
          secureTextEntry={true}
          onChangeText={(text) => setSenha(text)}
        />
        <Button
          style={styles.inputStyle}
          theme={theme}
          icon={picture === '' ? 'upload' : 'check'}
          mode='contained'
          onPress={() => setModal(true)}>
          Upload de Imagem
        </Button>
        {route.params ? (
          <Button
            style={styles.inputStyle}
            theme={theme}
            icon='content-save'
            mode='contained'
            onPress={() => updateDetails()}>
            Atualizar Detalhes
          </Button>
        ) : (
          <Button
            style={styles.inputStyle}
            theme={theme}
            icon='content-save'
            mode='contained'
            onPress={() => submitData() }>
            Salvar
          </Button>
        )}

        <Modal
          animationType='slide'
          transparent={true}
          visible={modal}
          onRequestClose={() => setModal(false)}>
          <View style={styles.modalView}>
            <View style={styles.modalButtonView}>
              <Button
                theme={theme}
                icon='camera'
                mode='contained'
                onPress={() => pickFromCamera()}>
                Câmera
              </Button>
              <Button
                theme={theme}
                icon='image-area'
                mode='contained'
                onPress={() => pickFromGallery()}>
                Galeria
              </Button>
            </View>
            <Button theme={theme} onPress={() => setModal(false)}>
              Cancelar
            </Button>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
};

const theme = {
  colors: {
    primary: '#006aff',
  },
};

export default CreateEmployee;
