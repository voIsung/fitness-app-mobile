import React, { createContext, useState, useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import { Pedometer } from 'expo-sensors';

export const StepContext = createContext();

export const StepProvider = ({ children }) => {
    const [pedometerAvailability, setPedometerAvailability] = useState(null);
    const [stepCount, setStepCount] = useState(0);

    async function requestPedometerPermission() {
        if (Platform.OS === 'android') {
            const result = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACTIVITY_RECOGNITION
            );
            return result === PermissionsAndroid.RESULTS.GRANTED;
        }
        return true;
    }

    useEffect(() => {
        const startPedometer = async () => {
            const permission = await requestPedometerPermission();
            if (!permission) {
                setPedometerAvailability("Permission not granted");
                return;
            }

            const stepCounter = Pedometer.watchStepCount(result => {
                setStepCount(result.steps);
            });

            Pedometer.isAvailableAsync().then(
                result => setPedometerAvailability(result ? "Available" : "Not available"),
                error => setPedometerAvailability("Error: " + error)
            );

            return () => {
                stepCounter && stepCounter.remove();
            };
        };

        startPedometer();
    }, []);

    return (
        <StepContext.Provider value={{ stepCount, pedometerAvailability }}>
            {children}
        </StepContext.Provider>
    );
};