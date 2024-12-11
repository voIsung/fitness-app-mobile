import React from 'react';
import { Text, View } from "react-native";
import styles from './StyleSheet.js';

const OpisTreninguScreen = ({ route }) => {
    const { workout } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {workout}
            </Text>
        </View>
    );
};

export default OpisTreninguScreen;
