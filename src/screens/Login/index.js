import React from 'react';
import { Text, View, Button } from "react-native";
import styles from './StyleSheet.js';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>
                Login screen
            </Text>
            <Button
                onPress={() => navigation.navigate('DrawerNav')}
                title="Zaloguj się"
            />
            <Text style={styles.description}>
                <Text>Pierwszy raz? </Text>
                <Text
                    style={styles.blueText}
                    onPress={() => navigation.navigate('Rejestracja')}
                >
                    Zarejestruj się
                </Text>
            </Text>
        </View>
    );
}

export default LoginScreen;
