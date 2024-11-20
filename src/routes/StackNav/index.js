import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../../screens/Login";
import RejestracjaScreen from "../../screens/Rejestracja";
import DrawerNav from "../DrawerNav";

const Stack = createNativeStackNavigator();

const header = {
    headerShown: false
}

const StackNav = () => {

    const headerStyle = {
        backgroundColor: '#B0E759'
    };

    return <Stack.Navigator screenOptions={{headerStyle}}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Rejestracja" component={RejestracjaScreen}/>
        <Stack.Screen name="DrawerNav" component={DrawerNav} options={header} />
    </Stack.Navigator>
}

export default StackNav;
