import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Snackbar, Checkbox } from 'react-native-paper';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Text as SvgText } from 'react-native-svg';
import { Picker } from '@react-native-picker/picker';
import styles from './StyleSheet.js';
import userJson from '../../examples/users.json';

const RejestracjaScreen = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [imie, setImie] = useState('');
    const [nazwisko, setNazwisko] = useState('');
    const [waga, setWaga] = useState('');
    const [wzrost, setWzrost] = useState('');
    const [kroki, setKroki] = useState('');
    const [plec, setPlec] = useState('Mężczyzna');
    const [cel, setCel] = useState('Utrata wagi');
    const [dataUr, setDataUr] = useState('');
    const [iloscTr, setIloscTr] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');

    const isLoginAvailable = (login) => {
        return !userJson.find(user => user.login === login);
    };

    const handleRegister = async () => {
        // Walidacja danych
        if (!login || !password || !confirmPassword || !imie || !nazwisko || !waga || !wzrost || !kroki || !dataUr || !iloscTr) {
            setMessage('Wszystkie pola muszą być wypełnione');
            setVisible(true);
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Hasła nie pasują');
            setVisible(true);
            return;
        }

        if (!isLoginAvailable(login)) {
            setMessage('Login jest już zajęty');
            setVisible(true);
            return;
        }

        if (!acceptedTerms) {
            setMessage('Musisz zaakceptować warunki użytkowania');
            setVisible(true);
            return;
        }

        // Create a new user
        const newUser = {
            login,
            haslo: password,
            imie,
            nazwisko,
            waga: parseFloat(waga),
            wzrost: parseFloat(wzrost),
            kroki: parseInt(kroki),
            cel: cel,
            iloscTr: parseInt(iloscTr),
            plec: plec,
            dataUr: dataUr,
        };

        userJson.push(newUser);

        try {
            setMessage('Rejestracja zakończona sukcesem');
            setVisible(true);
            navigation.navigate('Login');
        } catch (error) {
            console.error('Błąd podczas zapisywania danych logowania:', error);
            setMessage('Wystąpił błąd podczas rejestracji');
            setVisible(true);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
        >
            <ScrollView contentContainerStyle style={styles.container}>
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
                <View style={styles.allInputs}>
                <TextInput style={styles.input} placeholder="Login" value={login} onChangeText={setLogin} />
                <TextInput style={styles.input} placeholder="Hasło" secureTextEntry value={password} onChangeText={setPassword} />
                <TextInput style={styles.input} placeholder="Potwierdź Hasło" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
                <TextInput style={styles.input} placeholder="Imię" value={imie} onChangeText={setImie} />
                <TextInput style={styles.input} placeholder="Nazwisko" value={nazwisko} onChangeText={setNazwisko} />
                <TextInput style={styles.input} placeholder="Waga (kg)" keyboardType="numeric" value={waga} onChangeText={setWaga} />
                <TextInput style={styles.input} placeholder="Wzrost (cm)" keyboardType="numeric" value={wzrost} onChangeText={setWzrost} />
                <TextInput style={styles.input} placeholder="Cel kroków" keyboardType="numeric" value={kroki} onChangeText={setKroki} />
                <TextInput style={styles.input} placeholder="Data Urodzenia (DD-MM-YYYY)" value={dataUr} onChangeText={setDataUr} />
                <TextInput style={styles.input} placeholder="Liczba treningów w tygodniu" keyboardType="numeric" value={iloscTr} onChangeText={setIloscTr} />

                <View style={styles.pickerWrapper}>
                    <Picker selectedValue={plec} style={styles.pickerInput} onValueChange={(itemValue) => setPlec(itemValue)}>
                        <Picker.Item label="Mężczyzna" value="Mężczyzna" />
                        <Picker.Item label="Kobieta" value="Kobieta" />
                    </Picker>
                </View>
                <View style={styles.pickerWrapper}>
                    <Picker selectedValue={cel} style={styles.pickerInput} onValueChange={(itemValue) => setCel(itemValue)}>
                        <Picker.Item label="Tycie" value="Tycie" />
                        <Picker.Item label="Utrata wagi" value="Utrata wagi" />
                        <Picker.Item label="Keto" value="Keto" />
                    </Picker>
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox status={acceptedTerms ? 'checked' : 'unchecked'} onPress={() => setAcceptedTerms(!acceptedTerms)} />
                    <Text style={styles.checkboxText}>Zaakceptuj warunki użytkowania</Text>
                </View>

                    <Text style={styles.description}>
                        <Text>Masz już konto? </Text>
                        <Text
                            style={styles.blueText}
                            onPress={() => navigation.navigate('Login')}
                        >
                            Zaloguj się
                        </Text>
                    </Text>

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Zarejestruj się</Text>
                </TouchableOpacity>
                </View>

                <Snackbar
                    visible={visible}
                    onDismiss={() => setVisible(false)}
                    duration={3000}
                >
                    {message}
                </Snackbar>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default RejestracjaScreen;
