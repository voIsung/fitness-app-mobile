import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import styles from './StyleSheet.js';

const NUTRI_SCORE_IMAGES = {
  a: require('../../../assets/nutriScoreA.png'),
  b: require('../../../assets/nutriScoreB.png'),
  c: require('../../../assets/nutriScoreC.png'),
  d: require('../../../assets/nutriScoreD.png'),
  e: require('../../../assets/nutriScoreE.png'),
  default: require('../../../assets/nutriScoreDefault.png'),
};

const InformacjeScreen = ({ product }) => {
    const nutriScore = product.nutrition_grades_tags ? product.nutrition_grades_tags[0] : 'default';
  
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>{product.product_name || 'Nieznana nazwa produktu'}</Text>
          
          {product.image_url && (
            <Image
              source={{ uri: product.image_url }}
              style={styles.productImage}
            />
          )}
  
          <View style={styles.tableContainer}>
            <Text style={styles.tableTitle}>Wartości odżywcze (100g):</Text>
            <View style={styles.table}>
              <View style={styles.row}>
                <Text style={styles.cell}>Wartość energetyczna</Text>
                <Text style={styles.cell}>{product.nutriments['energy-kcal_100g'] || 'N/A'} kcal</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Tłuszcz</Text>
                <Text style={styles.cell}>{product.nutriments['fat_100g'] || 'N/A'} g</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Cukry</Text>
                <Text style={styles.cell}>{product.nutriments['sugars_100g'] || 'N/A'} g</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Białko</Text>
                <Text style={styles.cell}>{product.nutriments['proteins_100g'] || 'N/A'} g</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Sól</Text>
                <Text style={styles.cell}>{product.nutriments['salt_100g'] || 'N/A'} g</Text>
              </View>
            </View>
          </View>
  
          <View style={styles.nutriScoreContainer}>
            <Text style={styles.nutriScoreLabel}>Nutri-Score:</Text>
            <Image
              source={NUTRI_SCORE_IMAGES[nutriScore.toLowerCase()]}
              style={styles.nutriScoreImage}
            />
          </View>
        </View>
      </ScrollView>
    );
  };
  

export default InformacjeScreen;
