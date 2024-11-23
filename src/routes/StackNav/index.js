import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import LoginScreen from "../../screens/Login";
import RejestracjaScreen from "../../screens/Rejestracja";
import DrawerNav from "../DrawerNav";

const Stack = createNativeStackNavigator();

const GradientHeader = () => (
    <LinearGradient
        colors={['#D726B9', '#FF6070', '#FF9B04']}
        start={{ x: 0, y: 0 }}  // start at the left
        end={{ x: 1, y: 0 }}    // end at the right
        style={{ flex: 1 }}
    />
);

const StackNav = () => {
    return (
        <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: 'transparent' }}}>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerBackground: () => <GradientHeader/>}}/>
            <Stack.Screen name="Rejestracja" component={RejestracjaScreen} options={{ headerBackground: () => <GradientHeader/>, }}/>
            <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
};

export default StackNav;
