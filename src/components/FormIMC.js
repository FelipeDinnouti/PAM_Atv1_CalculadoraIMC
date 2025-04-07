import { View, TextInput, Button, StyleSheet, Text} from 'react-native';

import Result from './Result'
import Classification from './Classification'
import Error from './Error'

import { useState } from 'react';

// Componente em forma de função
const FormIMC = () => {
    // Declaração das variáveis de estado
    const [weight, setPeso] = useState('');
    const [height, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classification, setClassification] = useState(null);
    const [minWeight, setMinWeight] = useState(null);
    const [maxWeight, setMaxWeight] = useState(null);

    // Converte o input do usuário de string em float
    let weightFloat = parseFloat(weight)
    let heightFloat = parseFloat(height)

    // Toda a lógica de calculo de IMC e peso ideal
    const calcularIMC = () => {
        // Caso haja alguma entada inválida, a função é cancelada
        if ((weight == '' || weightFloat == NaN) || (height == '' || heightFloat == NaN) ) {return}
        
        // Mudando o estado para nulo o componente não é renderizado
        setImc(null);
        setClassification(null);

        // Coloco a função em um timeout para que de tempo para que o componente seja deletado e renderizado denovo (pra animação funcionar)
        setTimeout(() => { // Calcular o IMC 
            // Conversão de medidas 
            const alturaMetros = heightFloat/ 100;
            const quadradoAltura = alturaMetros*alturaMetros
            // Cálculo do IMC, limitado a duas casas decimais
            const imcCalculado = (weightFloat/(quadradoAltura)).toFixed(2); 
            
            // Atualiza a váriavel de estado
            setImc(imcCalculado);    

            // Calcular a classificação de peso
            if (imcCalculado < 18.5) {
                setClassification("Abaixo do Peso");
            } else if (imcCalculado < 25) {
                setClassification("Peso Normal");
            } else if (imcCalculado < 30) {
                setClassification("Sobrsepeso");
            } else if (imcCalculado < 35) {
                setClassification("Obesidade Grau 1");
            } else if (imcCalculado < 40) {
                setClassification ("Obesidade Grau 2");
            } else {
                setClassification("Obesidade Grau 3");
            }

            // Calcular peso ideal
            // imc=weight/height²  -- calcula pra ser em função de peso weight=imc*height²
            setMinWeight(18.5*quadradoAltura);
            setMaxWeight(25*quadradoAltura);
        }, 100) // Timeout de 100ms
        
    };

    // Retorna nulo caso nao haja nenhum erro, não renderizando nenhum texto
    const error = (str) => {
        if (str == '') {
            return null
        } else {
            return <Error err={str}></Error>
        }
    }

    // O default do erro é ser vazio
    let weightError = ''
    let heightError = ''

    // Muda o erro caso o input tenha sido inválido
    if (isNaN(weightFloat)) {weightError="Peso Inválido"}
    if (isNaN(heightFloat) || heightFloat==0) {heightError="Altura Inváilida"}

    // Retorno da função    
    return (
        // View é o container principal
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholderTextColor={"#0e263e"}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                value={weight}
                onChangeText={setPeso}
            />
            {error(weightError)}
            <TextInput
                style={styles.input}
                placeholderTextColor={"#0e263e"}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                value={height}
                onChangeText={setAltura}
            />
            {error(heightError)}
            <View style={styles.button}><Button title="Calcular IMC" color = "#20489f" borderRadius={16} borderWidth={1} borderColor = "#fff" onPress={calcularIMC}/></View>
            
            {(imc && minWeight && maxWeight && (isFinite(imc))) ? <Result imc={imc} classification={classification} minWeight={minWeight} maxWeight={maxWeight}/> : null} 
            {!isFinite(imc) ? <Text style={styles.segredinho}>Imc infinito? RECEBILL!</Text> : null}
        </View>
    );

};  

// Váriavel que engloba os estilos, para poder ser reautilizado
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: "#001224",
        padding: 16,
        borderRadius: 24,
    },
    input: {
        height: 40,
        borderColor: '#0e263e',
        borderWidth: 1,
        marginTop: 12,
        paddingHorizontal: 8,
        borderRadius: 8,
        color: "#fff",
        placeholderTextColor: "#fff",
    },
    button: {
        overflow: 'hidden',
        borderRadius: 8,
        marginTop: 12,
    },
    segredinho: {
        color: "#fff",
        marginTop: 10,
        textAlign: "center",
    }
});

export default FormIMC