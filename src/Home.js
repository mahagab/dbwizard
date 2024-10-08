import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

// Utilize require para imagens locais
const LogoOficial = require('../assets/images/logooficial.png');

const DBotWizard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Círculos */}
      <View style={styles.circleLarge}></View>
      <View style={styles.circleMedium}></View>
      <View style={styles.circleSmall}></View>

      {/* Conteúdo central */}
      <View style={styles.content}>
        <Image
          source={LogoOficial}
          
        />
        <Text style={styles.subText}>DBOT WIZARD</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('SignIn')}>
          <Text style={[styles.buttonText, styles.signInText]}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8AC6D0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleLarge: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#F0C987',
    position: 'absolute',
    top: 50,
    left: 30,
  },
  circleMedium: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#DFA58E',
    position: 'absolute',
    bottom: 100,
    right: 30,
  },
  circleSmall: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F0C987',
    position: 'absolute',
    top: 200,
    right: 50,
  },
  content: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  subText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Bayon',
    position: 'absolute',
    bottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    borderColor: '#000',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  signInButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
    borderWidth: 2,
  },
  signInText: {
    color: '#fff',
  },
  footer: {
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 1,
    padding: 20,
    justifyContent: 'space-around',
  },
});

export default DBotWizard;
