import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { Picker } from '@react-native-picker/picker';
import styles from './StyleSheet.js';
import userJson from '../../examples/users.json';

const ProfilScreen = ({ navigation }) => {
    const [userData, setUserData] = useState(null);
    const [bmi, setBmi] = useState(0);
    const [gender, setGender] = useState('');
    const [goal, setGoal] = useState('');

    const calculateBmi = (weight, height) => {
        const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
        setBmi(bmiValue);
    };

    const loadUserData = async () => {
        try {
            const userLogin = await SecureStore.getItemAsync('userLogin');

            if (userLogin) {
                const user = userJson.find(user => user.login === userLogin);

                if (user) {
                    setUserData(user);
                    setGender(user.plec);
                    setGoal(user.cel);
                    calculateBmi(user.waga, user.wzrost);
                } else {
                    Alert.alert('Błąd', 'Nie znaleziono użytkownika.');
                    navigation.navigate('Login');
                }
            } else {
                Alert.alert('Błąd', 'Brak zalogowanego użytkownika.');
                navigation.navigate('Login');
            }
        } catch (error) {
            console.error('Błąd podczas ładowania danych użytkownika:', error);
            Alert.alert('Błąd', 'Nie udało się załadować danych użytkownika.');
        }
    };

    useEffect(() => {
        loadUserData();
    }, []);

    const handleChange = (key, value) => {
        if (userData) {
            const updatedData = { ...userData, [key]: value };
            setUserData(updatedData);

            if (key === 'waga' || key === 'wzrost') {
                calculateBmi(
                    key === 'waga' ? value : userData.waga,
                    key === 'wzrost' ? value : userData.wzrost
                );
            }

            SecureStore.setItemAsync('userData', JSON.stringify(updatedData));
        }
    };

    const handleLogout = async () => {
        try {
            await SecureStore.deleteItemAsync('userToken');
            await SecureStore.deleteItemAsync('userLogin');
            await SecureStore.deleteItemAsync('userPassword');
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Błąd', 'Nie udało się wylogować użytkownika.');
            console.error('Błąd podczas wylogowywania:', error);
        }
    };

    if (!userData) {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Ładowanie danych...</Text>
            </View>
        );
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle>
                <Text style={styles.header}>Cel związany z aktywnością</Text>

                <View style={styles.formGroup}>
                    <Text>Kroki:</Text>
                    <TextInput
                        style={styles.inputCele}
                        keyboardType="numeric"
                        value={String(userData.kroki)}
                        onChangeText={(text) => handleChange('kroki', parseInt(text) || 0)}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text>Cel treningowy:</Text>
                    <View style={styles.pickerWrapperCele}>
                        <Picker
                            selectedValue={goal}
                            style={styles.pickerInput}
                            onValueChange={(itemValue) => {
                                setGoal(itemValue);
                                handleChange('cel', itemValue);
                            }}
                        >
                            <Picker.Item label="Tycie" value="Tycie" />
                            <Picker.Item label="Utrata wagi" value="Utrata wagi" />
                            <Picker.Item label="Keto" value="Keto" />
                        </Picker>
                    </View>
                </View>

                <View style={styles.formGroup}>
                    <Text>Liczba treningów w tygodniu:</Text>
                    <TextInput
                        style={styles.inputCele}
                        keyboardType="numeric"
                        value={String(userData.iloscTr)}
                        onChangeText={(text) => handleChange('iloscTr', parseInt(text) || 0)}
                    />
                </View>

                <Text style={styles.header}>Informacje o Tobie</Text>

                <View style={styles.inputRow}>
                    <View style={styles.inputWrapper}>
                        <Text>Imię:</Text>
                        <TextInput
                            style={styles.inputInfo}
                            value={userData.imie}
                            onChangeText={(text) => handleChange('imie', text)}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text>Nazwisko:</Text>
                        <TextInput
                            style={styles.inputInfo}
                            value={userData.nazwisko}
                            onChangeText={(text) => handleChange('nazwisko', text)}
                        />
                    </View>
                </View>

                <View style={styles.inputRow}>
                    <View style={styles.inputWrapper}>
                        <Text>Waga (kg):</Text>
                        <TextInput
                            style={styles.inputInfo}
                            keyboardType="numeric"
                            value={String(userData.waga)}
                            onChangeText={(text) => handleChange('waga', parseFloat(text) || 0)}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text>Wzrost (cm):</Text>
                        <TextInput
                            style={styles.inputInfo}
                            keyboardType="numeric"
                            value={String(userData.wzrost)}
                            onChangeText={(text) => handleChange('wzrost', parseFloat(text) || 0)}
                        />
                    </View>
                </View>

                <View style={styles.inputRow}>
                    <View style={styles.inputWrapper}>
                        <Text>Płeć:</Text>
                        <View style={styles.pickerWrapperInfo}>
                            <Picker
                                selectedValue={gender}
                                style={styles.pickerInput}
                                onValueChange={(itemValue) => {
                                    setGender(itemValue);
                                    handleChange('plec', itemValue);
                                }}
                            >
                                <Picker.Item label="Mężczyzna" value="Mężczyzna" />
                                <Picker.Item label="Kobieta" value="Kobieta" />
                            </Picker>
                        </View>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text>Data Urodzenia:</Text>
                        <TextInput
                            style={styles.inputInfo}
                            value={userData.dataUr}
                            onChangeText={(text) => handleChange('dataUr', text)}
                        />
                    </View>
                </View>

                <View style={styles.bmiContainer}>
                    <Text>Twój wskaźnik masy ciała (BMI) wynosi:</Text>
                    <Text style={styles.bmiValue}>{bmi}</Text>
                    <Text>
                        Twoje BMI wskazuje: {bmi < 18.5 ? 'Niedowaga' : bmi <= 24.9 ? 'Waga prawidłowa' : 'Nadwaga'}
                    </Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Wyloguj się</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ProfilScreen;
