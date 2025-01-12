import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ProductContext } from '../../context/ProductContext';
import { AntDesign } from '@expo/vector-icons';
import styles from './StyleSheet.js';

const DodaneProduktyScreen = () => {
    const { products, getTotalNutrients, removeProduct } = useContext(ProductContext);
    const totals = getTotalNutrients();

    const today = new Date().toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Dzisiejsza data: {today}</Text>
            </View>

            <FlatList
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.productItem}>
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productDetails}>
                            Kalorie: {item.calories} | Tłuszcz: {item.fat}g | Cukry: {item.sugar}g | Białko: {item.proteins}g
                        </Text>
                        <TouchableOpacity
                            onPress={() => removeProduct(index)}
                            style={styles.removeButton}
                        >
                            <AntDesign name="minuscircleo" size={24} color="red" />
                        </TouchableOpacity>
                    </View>
                )}
            />
            <View style={styles.totalsContainer}>
                <Text style={styles.totalsText}>Łączne Kalorie: {totals.calories}</Text>
                <Text style={styles.totalsText}>Tłuszcz: {totals.fat}g</Text>
                <Text style={styles.totalsText}>Cukry: {totals.sugar}g</Text>
                <Text style={styles.totalsText}>Białko: {totals.proteins}g</Text>
            </View>
        </View>
    );
};

export default DodaneProduktyScreen;
