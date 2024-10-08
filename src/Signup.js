import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const DBotWizard = () => {
  return (
    <View style={styles.container}>
      {/* Círculos */}
      <View style={styles.circleLarge}></View>
      <View style={styles.circleMedium}></View>
      <View style={styles.circleSmall}></View>

      {/* Conteúdo central */}
      <View style={styles.formcontainer}>
            <Text style={styles.tittleform}> SIGN UP</Text>
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
  formcontainer:{
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#fff',
    borderRadius: '20px',
    width: 350,
    height: 600,
    position: 'absolute'
  },
  tittleform:{
    textAlign: 'center',
    marginTop: 35,
    fontFamily: '',
    fontSize: 26,
    color: '#4A90E2'

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
  content: {
    alignItems: 'center',
  },

  signInButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
    borderWidth: 2
  },
  signInText: {
    color: '#fff',
  }
});

export default DBotWizard;
