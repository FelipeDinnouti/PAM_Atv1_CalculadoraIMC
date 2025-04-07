import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Função quer retorna a clasificação da pessoa com base no IMC
const Classification = ({ res }) => {
    return (
        <Text style={styles.classification}>Classificação: {res}</Text>
    );
};

// Váriavel que engloba os estilos, para poder ser reautilizado
const styles = StyleSheet.create({
    classification: {
      fontSize: 18,
      marginTop: 10,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff',
    },
  });

export default Classification;