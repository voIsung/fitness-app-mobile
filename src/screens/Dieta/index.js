import React, { useContext, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import CircularProgress from "react-native-circular-progress-indicator";
import { StepContext } from '../../context/StepContext';
import * as SecureStore from 'expo-secure-store';
import userJson from '../../examples/users.json';
import styles from './StyleSheet.js';

const DietaScreen = ({ navigation }) => {
    const { stepCount, pedometerAvailability } = useContext(StepContext);
    const [maxSteps, setMaxSteps] = useState(0);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const userLogin = await SecureStore.getItemAsync('userLogin');
                if (userLogin) {
                    const user = userJson.find(user => user.login === userLogin);
                    if (user) {
                        setMaxSteps(user.kroki);
                    }
                }
            } catch (error) {
                console.error('Błąd podczas ładowania danych użytkownika:', error);
            }
        };

        loadUserData();
    }, []);

    var Dist = (stepCount / 1300).toFixed(4);
    var cal = (Dist * 60).toFixed(4);

    return (
        <View style={styles.container}>
            {pedometerAvailability === "Not available" && (
                <Text>
                    Is Pedometer available: Not available
                </Text>
            )}

            <View style={styles.CircularProgressArea}>
                <View style={styles.BorderOut}>
                    <CircularProgress
                        value={stepCount}
                        maxValue={maxSteps || 6500}
                        radius={190}
                        textColor={'#000'}
                        activeStrokeColor={'#D726B9'}
                        inActiveStrokeColor={'#979292'}
                        inActiveStrokeOpacity={0.5}
                        inActiveStrokeWidth={40}
                        activeStrokeWidth={40}
                        title={`/${maxSteps || 6500}`}
                        titleColor={'#000'}
                        titleStyle={{ fontWeight: 'bold', fontSize: 45 }}
                    />
                    <View style={styles.BorderIns} />
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.textDesign, { paddingLeft: 12 }]}>Dystans Przebyty : {Dist} km</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={[styles.textDesign, { paddingLeft: 22 }]}>Spalone Kalorie : {cal}</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={[styles.textDesign, { paddingLeft: 22 }]}>Spożyte Kalorie : 0.0000</Text>
                </View>
            </View>
        </View>
    );
};

export default DietaScreen;
