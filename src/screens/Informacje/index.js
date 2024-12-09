import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './StyleSheet';

const nutriScoreImages = {
    a: require('../../../assets/NtrScore/NsScrA.png'),
    b: require('../../../assets/NtrScore/NsScrB.png'),
    c: require('../../../assets/NtrScore/NsScrC.png'),
    d: require('../../../assets/NtrScore/NsScrD.png'),
    e: require('../../../assets/NtrScore/NsScrE.png'),
};

const InformacjaScreen = ({ route }) => {
    const { productDetails } = route.params;

    const nutriScoreImage = nutriScoreImages[productDetails.nutriScore] || null;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Szczegóły produktu</Text>
            <View style={styles.table}>
                <View style={styles.row}>
                    <Text style={styles.cell}>Nazwa:</Text>
                    <Text style={styles.cell}>{productDetails.name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>Wartość energetyczna:</Text>
                    <Text style={styles.cell}>{productDetails.calories} kcal/100g</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>Tłuszcz:</Text>
                    <Text style={styles.cell}>{productDetails.fat} g/100g</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>Cukry:</Text>
                    <Text style={styles.cell}>{productDetails.sugar} g/100g</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>Białko:</Text>
                    <Text style={styles.cell}>{productDetails.proteins} g/100g</Text>
                </View>
            </View>
            {nutriScoreImage && (
                <Image
                    source={nutriScoreImage}
                    style={styles.nutriScoreImage}
                    resizeMode="contain"
                />
            )}
        </View>
    );
};

export default InformacjaScreen;
