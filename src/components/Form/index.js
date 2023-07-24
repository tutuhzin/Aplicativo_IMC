import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState(null);
    const [weigth, setweight] = useState(null);
    const [messageIMC, setMessageIMC] = useState();
    const [imc, setImc] = useState(null);
    const [TextButton, setTextButton] = useState("Calcular");
    const [erroMessage, setErrorMessage] = useState(null);

    // função para calcular
    function imcCalculator() {
        let heightFormat = height.replace(",", ".") // formata do  ponto para a virgula
        return setImc((weigth / (heightFormat * heightFormat)).toFixed(2)) // retornar duas casas decimais o toFixed.
    }

    // verificando se o campo está nulo
    function verificationImc() {
        Vibration.vibrate(); // sensor de vibração no app
        if (imc == null) {
            setErrorMessage("Campo obrigatório*")
        }
    }

    //verificando se o valor não está vazio
    function validationIMC() {
        if (weigth != null && height != null) {
            imcCalculator(null)
            setHeight(null)
            setweight(null)
            setMessageIMC("Seu IMC é igual: ")
            setTextButton("Calcular Novamente:")
            setErrorMessage(null)
            return
        }
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageIMC("Preencha o peso e a altura")

    }

    // Código principal

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura: </Text>
                <Text style={styles.errorMessagem}>{erroMessage}</Text>
                <TextInput style={styles.input}
                    onChangeText={setHeight} // Altera o estado da minha altura
                    value={height} // fica o meu próprio estado
                    placeholder="Ex. 1.50"
                    keyboardType="numeric" // Teclado númerico
                />

                <Text style={styles.formLabel}>Peso: </Text>
                <Text style={styles.errorMessagem}>{erroMessage}</Text>
                <TextInput style={styles.input}

                    onChangeText={setweight} // Altera o peso
                    value={weigth} // fica o meu próprio estado
                    placeholder="Ex: 75.365"
                    keyboardType="numeric" />


                <TouchableOpacity
                    style={styles.ButtonCalculator}
                    onPress={() => {
                        validationIMC()
                    }}>
                    <Text style={styles.setTextButton}>Calcular</Text>
                </TouchableOpacity>


            </View>

            <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc} />

        </Pressable > // View Final

    );
}