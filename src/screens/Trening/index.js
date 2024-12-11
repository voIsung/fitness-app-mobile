import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './StyleSheet.js';

const TreningScreen = ({ navigation }) => {
    const navigateToOpisTreningu = (workoutName) => {
        navigation.navigate('Opis Treningu', { workout: workoutName });
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <TouchableOpacity style={styles.workoutItem} onPress={() => navigateToOpisTreningu('Klatka Piersiowa')}>
                    <Image source={require('../../../assets/TrZdj/tr1.png')} style={styles.image} />
                    <Text style={styles.title}>KLATKA PIERSIOWA</Text>
                    <Text style={styles.subtitle}>POCZĄTKUJĄCY</Text>
                    <Text style={styles.time}>15 MIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.workoutItem} onPress={() => navigateToOpisTreningu('Plecy')}>
                    <Image source={require('../../../assets/TrZdj/tr2.png')} style={styles.image} />
                    <Text style={styles.title}>PLECY</Text>
                    <Text style={styles.subtitle}>POCZĄTKUJĄCY</Text>
                    <Text style={styles.time}>15 MIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.workoutItem} onPress={() => navigateToOpisTreningu('Nogi')}>
                    <Image source={require('../../../assets/TrZdj/tr3.png')} style={styles.image} />
                    <Text style={styles.title}>NOGI</Text>
                    <Text style={styles.subtitle}>ŚREDNIO ZAAWANSOWANY</Text>
                    <Text style={styles.time}>25 MIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.workoutItem} onPress={() => navigateToOpisTreningu('Brzuch')}>
                    <Image source={require('../../../assets/TrZdj/tr4.png')} style={styles.image} />
                    <Text style={styles.title}>BRZUCH</Text>
                    <Text style={styles.subtitle}>ZAAWANSOWANY</Text>
                    <Text style={styles.time}>20 MIN</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default TreningScreen;
