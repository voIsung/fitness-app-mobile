import {Text, View} from "react-native";
import { useTheme } from '../../context/ThemeContext';
import styles from './StyleSheet.js';

const TreningScreen = ({ navigation }) => {
    const { isDarkMode } = useTheme();
    const currentStyle = isDarkMode ? styles.DarkMode : styles.WhiteMode;
    return (
        <View style={[ styles.container, { backgroundColor: currentStyle.backgroundColor }]}>
            <Text style={{ color: currentStyle.color}}>
                TreningScreen
            </Text>
        </View>
    );
}

export default TreningScreen;
