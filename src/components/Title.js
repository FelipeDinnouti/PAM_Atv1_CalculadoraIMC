import {Text, StyleSheet} from 'react-native';

// Função principal que retorna um texto centralizado e
const Title = () => {
    return (<Text style={styles.title}>Calculadora de IMC</Text>
    );
  }
  
// Váriavel que engloba os estilos, para poder ser reautilizado
const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: "#fff",
  },
});

export default Title;