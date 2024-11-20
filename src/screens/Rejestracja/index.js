import {Text, View, Button } from "react-native";
import styles from './StyleSheet.js';
import React from "react";

const RejestracjaScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>
                Rejestracja screen
            </Text>
            <Button
                onPress={() => navigation.navigate('Login')}
                title="Zarejestruj się"
            />
            <Text style={styles.description}>
                <Text>Masz już konto? </Text>
                <Text
                    style={styles.blueText}
                    onPress={() => navigation.navigate('Login')}
                >
                    Zaloguj się
                </Text>
            </Text>
        </View>
    );
}

export default RejestracjaScreen;
