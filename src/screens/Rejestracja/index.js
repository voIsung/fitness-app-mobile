import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Snackbar, Checkbox } from 'react-native-paper';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Text as SvgText } from 'react-native-svg';
import { Picker } from '@react-native-picker/picker';
import styles from './StyleSheet.js';
import axios from 'axios';
import config from '../../../JsonIpConfig.js';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const RejestracjaScreen = ({ navigation }) => {
    const [userData, setUserData] = useState({
        login: '',
        password: '',
        confirmPassword: '',
        imie: '',
        nazwisko: '',
        waga: '',
        wzrost: '',
        kroki: '',
        plec: 'Mężczyzna',
        cel: 'Utrata wagi',
        dataUr: '',
        iloscTr: '',
        imageUri: "",
    });
    
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [visibilityDatePicker, setVisibilityDatePicker] = useState(false);

    const showDatePicker = () => {
        Keyboard.dismiss();
        setVisibilityDatePicker(true);
    };

    const hideDatePicker = () => {
        setVisibilityDatePicker(false);
    };

    const handleDateConfirm = (date) => {
        const formattedDate = date.toLocaleDateString('pl-PL');
        setUserData({ ...userData, dataUr: formattedDate });
        hideDatePicker();
    };

    const isLoginAvailable = async (login) => {
        try {
            const response = await axios.get(`${config.apiBaseUrl}/users`);
            console.log('Odpowiedź z serwera:', response.data);

            const loginExists = response.data.some(user => user.login === login);

            return !loginExists;
        } catch (error) {
            console.error('Błąd podczas sprawdzania dostępności loginu:', error);
            return false;
        }
    };

    const handleRegister = async () => {
        if (!userData.login || !userData.password || !userData.confirmPassword || !userData.imie || !userData.nazwisko || !userData.waga || !userData.wzrost || !userData.kroki || !userData.dataUr || !userData.iloscTr) {
            setMessage('Wszystkie pola muszą być wypełnione');
            setVisible(true);
            return;
        }

        if (userData.password !== userData.confirmPassword) {
            setMessage('Hasła nie pasują');
            setVisible(true);
            return;
        }

        const loginAvailable = await isLoginAvailable(userData.login);
        if (!loginAvailable) {
            setMessage('Login jest już zajęty');
            setVisible(true);
            return;
        }

        if (!acceptedTerms) {
            setMessage('Musisz zaakceptować warunki użytkowania');
            setVisible(true);
            return;
        }

        const newUser = {
            login: userData.login,
            haslo: userData.password,
            imie: userData.imie,
            nazwisko: userData.nazwisko,
            waga: parseFloat(userData.waga),
            wzrost: parseFloat(userData.wzrost),
            kroki: parseInt(userData.kroki),
            cel: userData.cel,
            iloscTr: parseInt(userData.iloscTr),
            plec: userData.plec,
            dataUr: userData.dataUr,
            imageUri: userData.imageUri,
        };

        try {
            await axios.post(`${config.apiBaseUrl}/users`, newUser);
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
                <TextInput style={styles.input} placeholder="Login" value={userData.login} onChangeText={(value) => setUserData({ ...userData, login: value })} />
                <TextInput style={styles.input} placeholder="Hasło" secureTextEntry value={userData.password} onChangeText={(value) => setUserData({ ...userData, password: value })} />
                <TextInput style={styles.input} placeholder="Potwierdź Hasło" secureTextEntry value={userData.confirmPassword} onChangeText={(value) => setUserData({ ...userData, confirmPassword: value })} />
                <TextInput style={styles.input} placeholder="Imię" value={userData.imie} onChangeText={(value) => setUserData({ ...userData, imie: value })} />
                <TextInput style={styles.input} placeholder="Nazwisko" value={userData.nazwisko} onChangeText={(value) => setUserData({ ...userData, nazwisko: value })} />
                <TextInput style={styles.input} placeholder="Waga (kg)" keyboardType="numeric" value={userData.waga} onChangeText={(value) => setUserData({ ...userData, waga: value })} />
                <TextInput style={styles.input} placeholder="Wzrost (cm)" keyboardType="numeric" value={userData.wzrost} onChangeText={(value) => setUserData({ ...userData, wzrost: value })} />
                <TextInput style={styles.input} placeholder="Cel kroków" keyboardType="numeric" value={userData.kroki} onChangeText={(value) => setUserData({ ...userData, kroki: value })} />
                <TextInput style={styles.input} placeholder="Data Urodzenia (DD-MM-YYYY)" value={userData.dataUr} onFocus={showDatePicker} caretHidden={true} />
                    <DateTimePickerModal
                        isVisible={visibilityDatePicker}
                        mode="date"
                        onConfirm={handleDateConfirm}
                        onCancel={hideDatePicker}
                    />
                <TextInput style={styles.input} placeholder="Liczba treningów w tygodniu" keyboardType="numeric" value={userData.iloscTr} onChangeText={(value) => setUserData({ ...userData, iloscTr: value })} />

                <View style={styles.pickerWrapper}>
                    <Picker selectedValue={userData.plec} style={styles.pickerInput} onValueChange={(itemValue) => setUserData({ ...userData, plec: itemValue })}>
                        <Picker.Item label="Mężczyzna" value="Mężczyzna" />
                        <Picker.Item label="Kobieta" value="Kobieta" />
                    </Picker>
                </View>
                <View style={styles.pickerWrapper}>
                    <Picker selectedValue={userData.cel} style={styles.pickerInput} onValueChange={(itemValue) => setUserData({ ...userData, cel: itemValue })}>
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
