import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
// mensagem no final
export default function ResultIMC(props) {
    return (
        // visualização do "preencha o peso e a altura"
        <View style={styles.contextIMC}>
            <Text style={styles.information}>{props.messageResultIMC}</Text>
            <Text style={styles.numberIMC}> {props.ResultIMC} </Text>

        </View >
    );
}