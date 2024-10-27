import {Text, View, Button} from "react-native";
import { useTheme } from '../../context/ThemeContext';
import styles from './StyleSheet.js';

const LoginScreen = ({ navigation }) => {
    const { isDarkMode } = useTheme();
    const currentStyle = isDarkMode ? styles.DarkMode : styles.WhiteMode;
    return (
        <View style={[ styles.container, { backgroundColor: currentStyle.backgroundColor }]}>
            <Text style={{ color: currentStyle.color}}>
                Login screen
            </Text>
            <Button
                onPress={() => navigation.navigate('DrawerNav')}
                title="Zaloguj się"
            />
        </View>
    );
}

export default LoginScreen;
