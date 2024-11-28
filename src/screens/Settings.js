import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Settings Screen</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Go back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop('Home')}>
            <Text style={styles.buttonText}>Go Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.push('Details')}>
            <Text style={styles.buttonText}>Go Details again</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize: 18,
        marginBottom: 20,
      },
     
    });

export default SettingsScreen;