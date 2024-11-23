import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from './StyleSheet.js';
import * as SecureStore from 'expo-secure-store';

const ProfilScreen = ({ navigation }) => {
    const handleLogout = async () => {
        try {
            await SecureStore.deleteItemAsync('userToken');
            await SecureStore.deleteItemAsync('userEmail');
            await SecureStore.deleteItemAsync('userPassword');
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Błąd', 'Nie udało się wylogować użytkownika.');
            console.error('Błąd podczas wylogowywania:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>ProfilScreen</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogout}
            >
                <Text style={styles.buttonText}>Wyloguj się</Text>
            </TouchableOpacity>
        </View>

    );
}

export default ProfilScreen;
