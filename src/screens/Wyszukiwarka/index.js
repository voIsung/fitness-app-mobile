import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { CameraView } from 'expo-camera';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './StyleSheet.js';

const WyszukiwarkaScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [cameraVisible, setCameraVisible] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchText]);

  useEffect(() => {
    if (debouncedSearch.trim()) {
      fetchSearchResults(debouncedSearch);
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearch]);

  const fetchSearchResults = async (query) => {
    try {
      const response = await axios.get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(
          query
        )}&search_simple=1&action=process&json=1`
      );
      if (response.data && response.data.products) {
        setSearchResults(response.data.products);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleBarcodeScanned = ({ type, data }) => {
    setScanned(true);
    fetchProductData(data);
  };

  const fetchProductData = async (barcode) => {
    try {
      const response = await axios.get(`https://world.openfoodfacts.org/api/v3/product/${barcode}.json`);
      if (response.data && response.data.product) {
        navigateToProductDetails(response.data.product);
      } else {
        alert('No product found');
      }
    } catch (error) {
      alert('Error fetching product details');
    } finally {
      setScanned(false);
    }
  };

  const navigateToProductDetails = (product) => {
    navigation.navigate('Informacje o Produkcie', {
      productDetails: {
        name: product.product_name || 'N/A',
        nutriScore: product.nutrition_grades_tags || 'N/A',
        calories: product.nutriments['energy-kcal_100g'] || 'N/A',
        fat: product.nutriments['fat_100g'] || 'N/A',
        sugar: product.nutriments['sugars_100g'] || 'N/A',
        proteins: product.nutriments['proteins_100g'] || 'N/A',
        image_url: product.image_url || null,
      },
    });
    setCameraVisible(false);
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigateToProductDetails(item)}
    >
      <Text style={styles.productName}>{item.product_name || 'No name'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Wyszukaj produkt"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Icon name="search-outline" size={30} color="black" style={styles.searchIcon} />
        <Icon
          name="camera-outline"
          size={30}
          color="black"
          style={styles.cameraIcon}
          onPress={() => setCameraVisible(true)}
        />
      </View>
      {cameraVisible ? (
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
          style={styles.cameraView}
        >
          <View style={styles.cameraOverlay}>
          <Icon
              name="scan-outline"
              size={300}
              color="white"
              onPress={() => setCameraVisible(false)}
              style={[styles.cameraScanOverlay]}
            />
            <Icon
              name="close"
              size={40}
              color="white"
              onPress={() => setCameraVisible(false)}
              style={styles.cameraCloseButton}
            />
          </View>
        </CameraView>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item, index) => item.id || item.code || index.toString()}
          renderItem={renderProductItem}
          ListEmptyComponent={
            !searchText.trim() ? null : <Text style={styles.noResultsText}>No products found</Text>
          }
        />
      )}
    </View>
  );
};

export default WyszukiwarkaScreen;
