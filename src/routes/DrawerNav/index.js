import { createDrawerNavigator } from '@react-navigation/drawer';
import EkranGlownyScreen from "../../screens/EkranGlowny";
import ProfilScreen from "../../screens/Profil";
import TreningScreen from "../../screens/Trening";
import DietaScreen from "../../screens/Dieta";
import InformacjaScreen from "../../screens/Informacje";
import WyszukiwarkaScreen from "../../screens/Wyszukiwarka";
import PowiadomieniaScreen from "../../screens/Powiadomienia";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    const headerStyle = {
        backgroundColor: '#B0E759'
    };

    return (
        <Drawer.Navigator screenOptions={{headerStyle}}>
            <Drawer.Screen name="Ekran Główny" component={EkranGlownyScreen} />
            <Drawer.Screen name="Wybór Treningu" component={TreningScreen} />
            <Drawer.Screen name="Śledzenie Diety" component={DietaScreen} />
            <Drawer.Screen name="Wyszukiwarka Produktów" component={WyszukiwarkaScreen} />
            <Drawer.Screen name="Informacje o Produktach" component={InformacjaScreen} />
            <Drawer.Screen name="Powiadomienia" component={PowiadomieniaScreen} />
            <Drawer.Screen name="Profil" component={ProfilScreen} />
        </Drawer.Navigator>
    );
}


export default DrawerNav;
