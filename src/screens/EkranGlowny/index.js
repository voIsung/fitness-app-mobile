import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from './StyleSheet.js';

const EkranGlownyScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Pierwszy rząd */}
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Wybór Treningu")}>
                    <Image source={require('../../../assets/Trening.png')} style={styles.image} />
                    <Text style={styles.label}>Wybór Treningu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Wyszukiwarka Produktów")}>
                    <Image source={require('../../../assets/Wyszukiwarka.png')} style={styles.image} />
                    <Text style={styles.label}>Wyszukiwarka produktów</Text>
                </TouchableOpacity>
            </View>

            {/* Drugi rząd */}
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Powiadomienia")}>
                    <Image source={require('../../../assets/Powiadomienia.png')} style={styles.image} />
                    <Text style={styles.label}>Powiadomienia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Śledzenie Diety")}>
                    <Image source={require('../../../assets/Dieta.png')} style={styles.image} />
                    <Text style={styles.label}>Śledzenie Diety</Text>
                </TouchableOpacity>
            </View>

            {/* Trzeci rząd */}
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Profil")}>
                    <Image source={require('../../../assets/Profil.png')} style={styles.image} />
                    <Text style={styles.label}>Profil</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default EkranGlownyScreen;
