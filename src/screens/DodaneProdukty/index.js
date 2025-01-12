import React, { useContext } from 'react';
import { View, Text, FlatList} from 'react-native';
import { ProductContext } from '../../context/ProductContext';
import styles from './StyleSheet.js';

const DodaneProduktyScreen = () => {
  const { products, getTotalNutrients } = useContext(ProductContext);
  const totals = getTotalNutrients();

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDetails}>
              Kalorie: {item.calories} | Tłuszcz: {item.fat}g | Cukry: {item.sugar}g | Białko: {item.proteins}g
            </Text>
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
