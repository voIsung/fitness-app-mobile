import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import styles from './StyleSheet.js';
import axios from 'axios';
import InformacjeScreen from '../Informacje/index.js';

const WyszukiwarkaScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === hasPermission);
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
        setProduct(response.data.product);
      } else {
        setProduct(null);
        alert('Nie znaleziono produktu');
      }
    } catch (error) {
      alert('Wystąpił błąd podczas pobierania szczegółów produktu');
    }
  };

  return (
    <View style={styles.container}>
      {product ? (
        <InformacjeScreen product={product} />
      ) : (
        <>
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
        </>
      )}
    </View>
  );
};

export default WyszukiwarkaScreen;
