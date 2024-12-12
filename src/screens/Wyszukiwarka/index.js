import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import styles from './StyleSheet.js';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const WyszukiwarkaScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [cameraVisible, setCameraVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarcodeScanned = ({ type, data }) => {
    setScanned(true);
    fetchProductData(data);
  };

  const fetchProductData = async (barcode) => {
    try {
      const response = await axios.get(`https://world.openfoodfacts.org/api/v3/product/${barcode}.json`);
      if (response.data && response.data.product) {
        navigation.navigate('Informacje o Produkcie', {
          productDetails: {
            name: response.data.product.product_name || 'N/A',
            nutriScore: response.data.product.nutrition_grades_tags || 'N/A',
            calories: response.data.product.nutriments['energy-kcal_100g'] || 'N/A',
            fat: response.data.product.nutriments['fat_100g'] || 'N/A',
            sugar: response.data.product.nutriments['sugars_100g'] || 'N/A',
            proteins: response.data.product.nutriments['proteins_100g'] || 'N/A',
            image_url: response.data.product.image_url || null,
          },
        });
      } else {
        alert('Nie znaleziono produktu');
        setScanned(false);
      }
    } catch (error) {
      alert('Wystąpił błąd podczas pobierania szczegółów produktu');
      setScanned(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Zeskanuj kod produktu</Text>
      {!cameraVisible ? (
        <Button title="Otwórz kamerę" onPress={() => setCameraVisible(true)} />
      ) : (
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
          style={styles.cameraView}
        />
      )}
      {scanned && <Button title={'Skanuj ponownie'} onPress={() => setScanned(false)} />}
    </View>
  );
};

export default WyszukiwarkaScreen;
