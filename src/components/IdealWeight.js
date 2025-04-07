import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Componente que engloba o peso ideal, citando o mínimo e o máximo.
const IdealWeight = ({ min, max }) => {
    return (
        <View>
            <Text style={styles.title}>Peso ideal: </Text>
            <Text style={styles.sub}>Mínimo: {min.toFixed(2)}kg</Text>
            <Text style={styles.sub}>Máximo: {max.toFixed(2)}kg</Text>
        </View>
    );
};

// Váriavel que engloba os estilos, para poder ser reautilizado
const styles = StyleSheet.create({
    // Texto maior
    title: {
      fontSize: 18,
      marginTop: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      color: "#fff",
    },
    // Texto menor 
    sub: {
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center',
        color: "#fff",
      },
  });

export default IdealWeight;