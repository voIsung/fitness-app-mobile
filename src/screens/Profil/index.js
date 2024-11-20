import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './StyleSheet.js';

const ProfilScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>ProfilScreen</Text>
            <Button
                onPress={() => navigation.navigate('Login')}
                title="Wyloguj się"
            />
        </View>

    );
}

export default ProfilScreen;
