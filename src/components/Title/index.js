import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

// O TÍTULO DO APLICATIVO

export default function Title() {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Calculando IMC</Text>
        </View >
    );
}