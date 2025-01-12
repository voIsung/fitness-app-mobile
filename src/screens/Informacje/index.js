import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './StyleSheet.js';
import { ProductContext } from '../../context/ProductContext/index.js';
import { useContext } from 'react';

const NUTRI_SCORE_IMAGES = {
  a: require('../../../assets/NtrScore/nutriScoreA.png'),
  b: require('../../../assets/NtrScore/nutriScoreB.png'),
  c: require('../../../assets/NtrScore/nutriScoreC.png'),
  d: require('../../../assets/NtrScore/nutriScoreD.png'),
  e: require('../../../assets/NtrScore/nutriScoreE.png'),
  default: require('../../../assets/NtrScore/nutriScoreDefault.png'),
};

const InformacjeScreen = ({ route, navigation }) => {
  const { productDetails } = route.params || {};
  const { addProduct } = useContext(ProductContext);

  if (!productDetails) {
    return (
      <View style={styles.container}>
        <Text>Brak danych o produkcie.</Text>
      </View>
    );
  }

  const {
    name,
    nutriScore = 'default',
    calories = 'N/A',
    fat = 'N/A',
    sugar = 'N/A',
    proteins = 'N/A',
    image_url,
  } = productDetails;

  const nutriScoreKey =
    Array.isArray(nutriScore) && nutriScore.length > 0
      ? nutriScore[0].toLowerCase()
      : 'default';

const handleAddProduct = () => {
  addProduct({
    name,
    nutriScore,
    calories,
    fat,
    sugar,
    proteins,
    image_url,
  });

  navigation.navigate("Dodane Produkty");
};

return (
  <View style={styles.mainContainer}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>

        {image_url ? (
          <Image source={{ uri: image_url }} style={styles.productImage} />
        ) : (
          <Text>Brak zdjęcia produktu</Text>
        )}

        <View style={styles.tableContainer}>
          <Text style={styles.tableTitle}>Przeciętna wartość odżywcza w 100g produktu:</Text>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.cell}>wartość energetyczna</Text>
              <Text style={styles.cell}>{calories} kcal</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>tłuszcz</Text>
              <Text style={styles.cell}>{fat} g</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>węglowodany</Text>
              <Text style={styles.cell}>{sugar} g</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>białko</Text>
              <Text style={styles.cell}>{proteins} g</Text>
            </View>
          </View>
        </View>

        <View style={styles.nutriScoreContainer}>
          <Text style={styles.nutriScoreLabel}>Nutri-Score:</Text>
          <Image
            source={NUTRI_SCORE_IMAGES[nutriScoreKey] || NUTRI_SCORE_IMAGES.default}
            style={styles.nutriScoreImage}
          />
        </View>
      </View>
    </ScrollView>
    <TouchableOpacity style={styles.addProductButton} onPress= {handleAddProduct}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  </View>
);
};
export default InformacjeScreen;
