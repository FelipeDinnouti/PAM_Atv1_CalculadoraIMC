import React, { useEffect, useRef  } from 'react';
import { Animated, Text, StyleSheet, View, Easing} from 'react-native';
import Classification from "./Classification"
import IdealWeight from "./IdealWeight"

// Container que vai ser composto por toda a resposta de análise, incluindo o peso ideal, classificação e IMC.
const Result = ({ imc, classification, minWeight, maxWeight }) => {
    const expandAnim = useRef(new Animated.Value(0)).current;

    // Função da animação
    useEffect(() => {
      Animated.timing(expandAnim, {
        toValue: 1, // Tamanho default
        easing: Easing.bounce,
        duration: 1000, // Duração de 100ms
        useNativeDriver: true,
      }).start(); 
      
    }), [];

    return (
        <Animated.View style={[styles.result, { 
          transform: [{scaleY: expandAnim.interpolate({
            inputRange: [0,1], 
            outputRange: [0.2,1], // O tamanho mínimo (inicial) é 20%
          })}] 
          }]}>
          <Text style={styles.result}>Seu IMC é: {imc}</Text>
          {classification && <Classification res={classification}/>}
          {(minWeight && maxWeight) && <IdealWeight min={minWeight} max={maxWeight}/>}
        </Animated.View>
    );
};

// Váriavel que engloba os estilos, para poder ser reautilizado
const styles = StyleSheet.create({
    result: {
      fontSize: 24,
      marginTop: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: "#fff",
    },
  });

export default Result;