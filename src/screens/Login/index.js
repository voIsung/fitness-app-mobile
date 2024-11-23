import React, { useState, useEffect } from 'react';
import { View, TextInput, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Snackbar, Checkbox } from 'react-native-paper';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Text as SvgText } from 'react-native-svg';
import styles from './StyleSheet.js';
import * as SecureStore from 'expo-secure-store';
import userJson from '../../examples/users.json'; // Import użytkowników

const LoginScreen = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [autoLogin, setAutoLogin] = useState(false);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    const checkStoredData = async () => {
        try {
            const token = await SecureStore.getItemAsync('userToken');
            const storedLogin = await SecureStore.getItemAsync('userLogin');
            const storedPassword = await SecureStore.getItemAsync('userPassword');

            if (token && storedLogin && storedPassword) {
                navigation.navigate('DrawerNav');
            }
        } catch (error) {
            console.error('Błąd podczas sprawdzania zapisanych danych:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkStoredData();
    }, []);

    const saveData = async (token, login, password) => {
        try {
            if (autoLogin) {
                await SecureStore.setItemAsync('userToken', token);
            }
        } catch (error) {
            console.error('Błąd podczas zapisywania danych:', error);
        } finally {
            await SecureStore.setItemAsync('userLogin', login);
            await SecureStore.setItemAsync('userPassword', password);
        }
    };

    const handleLogin = async () => {
        if (!login || !password) {
            setMessage('Wszystkie pola muszą być wypełnione');
            setVisible(true);
            return;
        }

        const user = userJson.find(user => user.login === login);

        if (user && user.haslo === password) {
            const token = 'exampleToken12345';
            try {
                await saveData(token, login, password);
                setMessage('Zalogowano pomyślnie');
                setVisible(true);
                navigation.navigate('DrawerNav');
            } catch (error) {
                setMessage('Błąd podczas logowania');
                setVisible(true);
            }
        } else {
            setMessage('Nieprawidłowy login lub hasło');
            setVisible(true);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Svg height="120" width="100%" viewBox="0 0 500 120">
                <Defs>
                    <SvgLinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <Stop offset="0%" stopColor="#D726B9" />
                        <Stop offset="50%" stopColor="#FF6070" />
                        <Stop offset="100%" stopColor="#FF9B04" />
                    </SvgLinearGradient>
                </Defs>
                <SvgText
                    fill="url(#gradient)"
                    fontSize="102"
                    fontWeight="960"
                    fontStyle="italic"
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                    alignmentBaseline="middle"
                >
                    FitApp
                </SvgText>
            </Svg>

            <TextInput
                style={styles.input}
                placeholder="Login"
                value={login}
                onChangeText={setLogin}
            />

            <TextInput
                style={styles.input}
                placeholder="Hasło"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <View style={styles.checkboxContainer}>
                <Checkbox
                    status={autoLogin ? 'checked' : 'unchecked'}
                    onPress={() => setAutoLogin(!autoLogin)}
                />
                <Text style={styles.checkboxText}>Włącz autologowanie</Text>
            </View>

            <Text style={styles.description}>
                <Text>Pierwszy raz? </Text>
                <Text
                    style={styles.blueText}
                    onPress={() => navigation.navigate('Rejestracja')}
                >
                    Zarejestruj się
                </Text>
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Zaloguj się</Text>
            </TouchableOpacity>

            <Snackbar
                visible={visible}
                onDismiss={() => setVisible(false)}
                duration={3000}
            >
                {message}
            </Snackbar>
        </View>
    );
};

export default LoginScreen;
