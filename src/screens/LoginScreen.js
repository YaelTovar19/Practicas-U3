import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useColorMode } from 'native-base';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
  const navigation = useNavigation(); // Usa el hook para obtener la navegación
  const { colorMode } = useColorMode(); // Obtener el modo de color actual

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Colores según el modo
  const backgroundColor = colorMode === 'light' ? '#f0f8ff' : '#20232a';
  const textColor = colorMode === 'light' ? '#333333' : '#61dafb';
  const inputBackgroundColor = colorMode === 'light' ? '#ffffff' : '#282c34';
  const inputBorderColor = colorMode === 'light' ? '#b0c4de' : '#61dafb';
  const placeholderColor = colorMode === 'light' ? '#a9a9a9' : '#61dafb';
  const inputTextColor = '#ffffff';

  const handleLogin = () => {
    navigation.replace('Main');
  };

  const handleForgotPassword = () => {
    alert('Recuperar contraseña no implementado aún');
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Iniciar Sesión</Text>

      <TextInput
        style={[
          styles.input, 
          { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: inputTextColor }
        ]}
        placeholder="Usuario"
        placeholderTextColor={placeholderColor}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={[
          styles.input, 
          { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: inputTextColor }
        ]}
        placeholder="Contraseña"
        placeholderTextColor={placeholderColor}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
        <Text style={[styles.forgotText, { color: textColor }]}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <Pressable onPress={() => navigation.navigate('Registro')} style={styles.registerLink}>
        <Text style={[styles.forgotText, { color: textColor }]}>¿No tienes cuenta? Regístrate aquí</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '40%',  
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
  },
  button: {
    width: '40%',  
    height: 40,  
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  loginButton: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotText: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  registerLink: {
    marginTop: 10,
  },
});

export default LoginScreen;
