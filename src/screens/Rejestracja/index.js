import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Snackbar, Checkbox } from 'react-native-paper';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Text as SvgText } from 'react-native-svg';
import styles from './StyleSheet.js';


const RejestracjaScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');

    const handleRegistration = async () => {
        if (!email || !password) {
            setMessage('Wszystkie pola muszą być wypełnione');
            setVisible(true);
        } else if (!isChecked) {
            setMessage('Musisz zaakceptować warunki użytkowania');
            setVisible(true);
        } else {
                setMessage('Zarejestrowano pomyślnie');
                setVisible(true);
                navigation.navigate('Login');
        }
    };

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
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
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
                    status={isChecked ? 'checked' : 'unchecked'}
                    onPress={() => setIsChecked(!isChecked)}
                />
                <Text style={styles.checkboxText}>Akceptuję warunki użytkowania</Text>
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

            <TouchableOpacity
                style={styles.button}
                onPress={handleRegistration}
            >
                <Text style={styles.buttonText}>Zarejestruj się</Text>
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
}

export default RejestracjaScreen;
