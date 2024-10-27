import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../../screens/Login";
import DrawerNav from "../DrawerNav";
import { useTheme  } from '../../context/ThemeContext';

const Stack = createNativeStackNavigator();

const header = {
    headerShown: false
}

const StackNav = () => {
    const { isDarkMode } = useTheme();

    const headerStyle = {
        backgroundColor: isDarkMode ? '#333' : '#fff', // Tło
    };

    const headerTitleStyle = {
        color: isDarkMode ? '#fff' : '#000', // Kolor tekstu
    };

    return <Stack.Navigator screenOptions={{headerStyle, headerTitleStyle}}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="DrawerNav" component={DrawerNav} options={header} />
    </Stack.Navigator>
}

export default StackNav;
