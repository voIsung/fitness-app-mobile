import React from 'react';
import { Text, View } from 'react-native';
import styles from './StyleSheet';

const InformacjaScreen = ({ route }) => {
    const { productDetails } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Szczegóły produktu</Text>
            <View style={styles.table}>
                <View style={styles.row}>
                    <Text style={styles.cell}>Nazwa:</Text>
                    <Text style={styles.cell}>{productDetails.name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>Nutri-Score:</Text>
                    <Text style={styles.cell}>{productDetails.nutriScore}</Text>
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
        </View>
    );
};

export default InformacjaScreen;
