import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Função que retorna um texto que vai servir de feedback caso o input do usuário seja inválido. Só é renderizado caso haja um erro
const Error = ({ err }) => {
    return (
        <View>{err && <Text style={styles.error}>{err}</Text>}</View>
    );
};

const styles = StyleSheet.create({
    error: {
      fontSize: 14,
      marginBottom: 10,
      fontStyle: 'italic',
      textAlign: 'left',
      color: '#982021',
    },
  });

export default Error;