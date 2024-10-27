import React from 'react';
import { Text, View, Switch } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import styles from './StyleSheet.js';

const UstawieniaScreen = ({ navigation }) => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const currentStyle = isDarkMode ? styles.DarkMode : styles.WhiteMode;
    return (
        <View style={[ styles.container, { backgroundColor: currentStyle.backgroundColor }]}>
            <Text style={{ color: currentStyle.color, marginBottom: 20 }}>
                UstawieniaScreen
            </Text>
            <Text style={{ color: currentStyle.color, marginBottom: 10 }}>
                Dark Mode: {isDarkMode ? "On" : "Off"}
            </Text>
            <Switch
                value={isDarkMode}
                onValueChange={toggleDarkMode}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            />
        </View>
    );
}

export default UstawieniaScreen;
