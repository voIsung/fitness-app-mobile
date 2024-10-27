import { createDrawerNavigator } from '@react-navigation/drawer';
import EkranGlownyScreen from "../../screens/EkranGlowny";
import UstawieniaScreen from "../../screens/Ustawienia";
import TreningScreen from "../../screens/Trening";
import DietaScreen from "../../screens/Dieta";
import InformacjaScreen from "../../screens/Informacje";
import WyszukiwarkaScreen from "../../screens/Wyszukiwarka";
import PowiadomieniaScreen from "../../screens/Powiadomienia";
import { useTheme  } from '../../context/ThemeContext';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    const { isDarkMode } = useTheme();

     const headerStyle = {
        backgroundColor: isDarkMode ? '#333' : '#fff', // Tło
     };

     const headerTitleStyle = {
        color: isDarkMode ? '#fff' : '#000', // Kolor tekstu
     };

    const drawerStyle = {
        backgroundColor: isDarkMode ? '#333' : '#fff', // tło
    };

     const drawerLabelStyle = {
        color: isDarkMode ? '#fff' : '#000', // Kolor tekstu
     };

    return (
        <Drawer.Navigator screenOptions={{headerStyle, headerTitleStyle, drawerStyle, drawerLabelStyle}}>
            <Drawer.Screen name="Ekran Główny" component={EkranGlownyScreen} />
            <Drawer.Screen name="Wybór Treningu" component={TreningScreen} />
            <Drawer.Screen name="Śledzenie Diety" component={DietaScreen} />
            <Drawer.Screen name="Wyszukiwarka Produktów" component={WyszukiwarkaScreen} />
            <Drawer.Screen name="Informacje o Produktach" component={InformacjaScreen} />
            <Drawer.Screen name="Powiadomienia" component={PowiadomieniaScreen} />
            <Drawer.Screen name="Ustawienia" component={UstawieniaScreen} />

        </Drawer.Navigator>
    );
}


export default DrawerNav;
