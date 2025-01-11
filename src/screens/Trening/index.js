import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './StyleSheet.js';

const TreningScreen = ({ navigation }) => {
    const navigateToOpisTreningu = (workoutName, time) => {
        navigation.navigate('Opis Treningu', { workout: workoutName, time });
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <TouchableOpacity
                    style={styles.workoutItem}
                    onPress={() => navigateToOpisTreningu('Klatka Piersiowa Początkujący', '15 MIN')}>
                    <Image source={require('../../../assets/TrZdj/tr1.png')} style={styles.image} />
                    <Text style={styles.title}>KLATKA PIERSIOWA</Text>
                    <Text style={styles.subtitle}>POCZĄTKUJĄCY</Text>
                    <Text style={styles.time}>15 MIN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.workoutItem}
                    onPress={() => navigateToOpisTreningu('Plecy Początkujący', '15 MIN')}>
                    <Image source={require('../../../assets/TrZdj/tr2.png')} style={styles.image} />
                    <Text style={styles.title}>PLECY</Text>
                    <Text style={styles.subtitle}>POCZĄTKUJĄCY</Text>
                    <Text style={styles.time}>15 MIN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.workoutItem}
                    onPress={() => navigateToOpisTreningu('Nogi Zaawansowany', '25 MIN')}>
                    <Image source={require('../../../assets/TrZdj/tr3.png')} style={styles.image} />
                    <Text style={styles.title}>NOGI</Text>
                    <Text style={styles.subtitle}>ZAAWANSOWANY</Text>
                    <Text style={styles.time}>25 MIN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.workoutItem}
                    onPress={() => navigateToOpisTreningu('Brzuch Zaawansowany', '20 MIN')}>
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
