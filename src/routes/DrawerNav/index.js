import { createDrawerNavigator } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';
import EkranGlownyScreen from "../../screens/EkranGlowny";
import ProfilScreen from "../../screens/Profil";
import TreningScreen from "../../screens/Trening";
import DietaScreen from "../../screens/Dieta";
import InformacjaScreen from "../../screens/Informacje";
import WyszukiwarkaScreen from "../../screens/Wyszukiwarka";
import PowiadomieniaScreen from "../../screens/Powiadomienia";

const Drawer = createDrawerNavigator();

const GradientHeader = () => (
    <LinearGradient
        colors={['#D726B9', '#FF6070', '#FF9B04']}
        start={{ x: 0, y: 0 }}  // start at the left
        end={{ x: 1, y: 0 }}    // end at the right
        style={{ flex: 1 }}
    />
);

const DrawerNav = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerBackground: () => <GradientHeader />,
                headerStyle: {
                    backgroundColor: 'transparent',  // make the header transparent to show gradient
                },
            }}
        >
            <Drawer.Screen name="Ekran Główny" component={EkranGlownyScreen} />
            <Drawer.Screen name="Wybór Treningu" component={TreningScreen} />
            <Drawer.Screen name="Śledzenie Diety" component={DietaScreen} />
            <Drawer.Screen name="Wyszukiwarka Produktów" component={WyszukiwarkaScreen} />
            <Drawer.Screen name="Informacje o Produktach" component={InformacjaScreen} />
            <Drawer.Screen name="Powiadomienia" component={PowiadomieniaScreen} />
            <Drawer.Screen name="Profil" component={ProfilScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNav;