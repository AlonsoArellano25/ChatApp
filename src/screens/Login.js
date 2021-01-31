import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import logoApp from '../assets/chatLogo.png';

export default function Login({setUserName}) {
  const [name, setName] = useState('');
  console.log(name);

  const onSubmit = () => {
    setUserName(name);
  };
  return (
    <View style={styles.container}>
      <View>
        <Image source={logoApp} resizeMode="contain" style={styles.img} />
      </View>
      <TextInput
        placeholder="Nombre de usuario"
        style={{color: 'fff', backgroundColor: '#16202b'}}
        onChange={(e) => setName(e.nativeEvent.text)}
      />
      <Button style={styles.btnLogin} onPress={onSubmit}>
        <Text style={{color: '#Fff'}}>Entrar</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 100,
  },
  img: {
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
  btnLogin: {
    marginTop: 40,
    justifyContent: 'center',
    backgroundColor: '#0098d3',
  },
});
